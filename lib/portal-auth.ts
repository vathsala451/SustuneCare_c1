import crypto from "crypto";

export interface ClientProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  nriLocation: string;
  memberSince: string;
  serviceTier: "dual" | "aegis" | "sparsh";
  aegisAccess: boolean;
  sparshAccess: boolean;
  avatarInitials: string;
  assignedCityManager: {
    name: string;
    phone: string;
    whatsapp: string;
    hub: string;
    photo?: string;
  };
}

export interface AuthSession {
  sessionId: string;
  client: ClientProfile;
  expiresAt: number;
}

// Secret key for HMAC signing (with fallback for dev)
const AUTH_SECRET = process.env.PORTAL_AUTH_SECRET || "sustune-care-fiduciary-auth-secret-key-2026";

/**
 * Secure password hashing with crypto SHA-256 + salt
 */
export function hashPassword(password: string, salt: string = "sustune_salt_2026"): string {
  return crypto.createHash("sha256").update(`${password}:${salt}`).digest("hex");
}

/**
 * Verify plain text password against hashed password
 */
export function verifyPassword(plainPassword: string, hashedPassword: string): boolean {
  const hash = hashPassword(plainPassword);
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hashedPassword));
}

// Shared secure default test password for all demo accounts
const DEFAULT_TEST_PASSWORD_HASH = hashPassword("Sustune@2026");

/**
 * Registered Institutional Clients
 * Each account demonstrates role-based isolation between Aegis and Sparsh
 */
export const INSTITUTIONAL_CLIENTS: Array<ClientProfile & { passwordHash: string }> = [
  {
    id: "client-dual-01",
    name: "Anand Sharma",
    email: "anand.sharma@sustunecare.com",
    phone: "+1 (408) 555-0192",
    nriLocation: "San Jose, CA (USA)",
    memberSince: "January 2024",
    serviceTier: "dual",
    aegisAccess: true,
    sparshAccess: true,
    avatarInitials: "AS",
    passwordHash: DEFAULT_TEST_PASSWORD_HASH,
    assignedCityManager: {
      name: "Vikramaditya Rao",
      phone: "+91 98450 12345",
      whatsapp: "919845012345",
      hub: "Bengaluru Central (Indiranagar)",
    },
  },
  {
    id: "client-aegis-02",
    name: "Rajesh Patel",
    email: "rajesh.patel@sustunecare.com",
    phone: "+44 20 7946 0912",
    nriLocation: "London (United Kingdom)",
    memberSince: "March 2024",
    serviceTier: "aegis",
    aegisAccess: true,
    sparshAccess: false, // Aegis Property Only - Zero Sparsh Access
    avatarInitials: "RP",
    passwordHash: DEFAULT_TEST_PASSWORD_HASH,
    assignedCityManager: {
      name: "Suresh K. Reddy",
      phone: "+91 98860 67890",
      whatsapp: "919886067890",
      hub: "Hyderabad Hub (Gachibowli)",
    },
  },
  {
    id: "client-sparsh-03",
    name: "Priya Deshmukh",
    email: "priya.deshmukh@sustunecare.com",
    phone: "+971 50 123 4567",
    nriLocation: "Dubai (UAE)",
    memberSince: "June 2024",
    serviceTier: "sparsh",
    aegisAccess: false, // Sparsh Elder Care Only - Zero Property Access
    sparshAccess: true,
    avatarInitials: "PD",
    passwordHash: DEFAULT_TEST_PASSWORD_HASH,
    assignedCityManager: {
      name: "Sister Mary Teresa, RN",
      phone: "+91 94480 34567",
      whatsapp: "919448034567",
      hub: "Bengaluru South (Koramangala)",
    },
  },
];

/**
 * Generate a signed session token
 */
export function createSessionToken(client: ClientProfile): string {
  const sessionData = {
    clientId: client.id,
    email: client.email,
    serviceTier: client.serviceTier,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    nonce: crypto.randomBytes(8).toString("hex"),
  };

  const payload = Buffer.from(JSON.stringify(sessionData)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", AUTH_SECRET)
    .update(payload)
    .digest("base64url");

  return `${payload}.${signature}`;
}

export type StoredClient = ClientProfile & { passwordHash: string };

function getClientsFilePath(): string {
  try {
    const path = require("path");
    return path.join(process.cwd(), "data", "portal-clients.json");
  } catch {
    return "";
  }
}

function loadPersistedClients(): StoredClient[] {
  if (typeof window !== "undefined") return [];
  try {
    const fs = require("fs");
    const filePath = getClientsFilePath();
    if (filePath && fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.warn("Could not read persisted portal clients:", err);
  }
  return [];
}

function savePersistedClients(clients: StoredClient[]): void {
  if (typeof window !== "undefined") return;
  try {
    const fs = require("fs");
    const path = require("path");
    const filePath = getClientsFilePath();
    if (filePath) {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(clients, null, 2), "utf-8");
    }
  } catch (err) {
    console.warn("Could not save persisted portal clients:", err);
  }
}

// Preserve registered clients across HMR reload cycles in development
const globalForClients = globalThis as unknown as {
  __sustune_registered_clients__?: StoredClient[];
};

if (!globalForClients.__sustune_registered_clients__) {
  globalForClients.__sustune_registered_clients__ = loadPersistedClients();
}

/**
 * Returns all active clients: demo accounts + newly registered accounts
 */
export function getAllClients(): StoredClient[] {
  const dynamic = globalForClients.__sustune_registered_clients__ || [];
  return [...INSTITUTIONAL_CLIENTS, ...dynamic];
}

/**
 * Register a new NRI client into the portal
 */
export interface RegisterClientInput {
  name: string;
  email: string;
  password: string;
  phone?: string;
  nriLocation?: string;
  serviceTier?: "dual" | "aegis" | "sparsh";
}

export function registerClient(input: RegisterClientInput): {
  success: boolean;
  message: string;
  client?: ClientProfile;
} {
  const normalizedEmail = input.email.trim().toLowerCase();

  // Check if client already exists
  const existing = findClientByEmail(normalizedEmail);
  if (existing) {
    return {
      success: false,
      message: "An account with this email address already exists. Please sign in instead.",
    };
  }

  const name = input.name.trim();
  const serviceTier: "dual" | "aegis" | "sparsh" = input.serviceTier || "dual";

  // Derive 2-letter avatar initials from client name
  const initials =
    name
      .split(/\s+/)
      .map((part) => part[0]?.toUpperCase())
      .filter(Boolean)
      .slice(0, 2)
      .join("") || "SC";

  // Assign personalized fiduciary City Manager based on chosen tier
  const assignedCityManager =
    serviceTier === "sparsh"
      ? {
          name: "Sister Mary Teresa, RN",
          phone: "+91 94480 34567",
          whatsapp: "919448034567",
          hub: "Bengaluru South (Koramangala)",
        }
      : serviceTier === "aegis"
      ? {
          name: "Suresh K. Reddy",
          phone: "+91 98860 67890",
          whatsapp: "919886067890",
          hub: "Hyderabad Hub (Gachibowli)",
        }
      : {
          name: "Vikramaditya Rao",
          phone: "+91 98450 12345",
          whatsapp: "919845012345",
          hub: "Bengaluru Central (Indiranagar)",
        };

  const newClient: StoredClient = {
    id: `client-${serviceTier}-${Date.now().toString(36)}`,
    name,
    email: normalizedEmail,
    phone: input.phone?.trim() || "+1 (555) 000-0000",
    nriLocation: input.nriLocation?.trim() || "Global NRI Client",
    memberSince: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    serviceTier,
    aegisAccess: serviceTier === "dual" || serviceTier === "aegis",
    sparshAccess: serviceTier === "dual" || serviceTier === "sparsh",
    avatarInitials: initials,
    passwordHash: hashPassword(input.password),
    assignedCityManager,
  };

  if (!globalForClients.__sustune_registered_clients__) {
    globalForClients.__sustune_registered_clients__ = [];
  }
  globalForClients.__sustune_registered_clients__.push(newClient);
  savePersistedClients(globalForClients.__sustune_registered_clients__);

  return {
    success: true,
    message: "Your Sustune Care client portal account was created successfully.",
    client: sanitizeClient(newClient),
  };
}

/**
 * Verify and parse a signed session token
 */
export function verifySessionToken(token: string): ClientProfile | null {
  if (!token || !token.includes(".")) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expectedSignature = crypto
    .createHmac("sha256", AUTH_SECRET)
    .update(payload)
    .digest("base64url");

  if (signature !== expectedSignature) {
    return null; // Invalid signature
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (data.exp && Date.now() > data.exp) {
      return null; // Expired
    }

    const client = getAllClients().find((c) => c.id === data.clientId);
    return client ? sanitizeClient(client) : null;
  } catch {
    return null;
  }
}

/**
 * Strip sensitive hashes before returning to client
 */
export function sanitizeClient(client: ClientProfile & { passwordHash?: string }): ClientProfile {
  const { passwordHash, ...safe } = client;
  return safe;
}

/**
 * Find client by email (case-insensitive across demo and registered accounts)
 */
export function findClientByEmail(email: string): StoredClient | undefined {
  const normalized = email.trim().toLowerCase();
  return getAllClients().find((c) => c.email.toLowerCase() === normalized);
}

// In-memory store for reset password requests
export const passwordResetStore = new Map<string, { email: string; expiresAt: number }>();

export function createPasswordResetToken(email: string): string {
  const token = crypto.randomBytes(24).toString("hex");
  passwordResetStore.set(token, {
    email: email.toLowerCase(),
    expiresAt: Date.now() + 30 * 60 * 1000, // 30 mins
  });
  return token;
}

export function verifyPasswordResetToken(token: string): string | null {
  const request = passwordResetStore.get(token);
  if (!request) return null;
  if (Date.now() > request.expiresAt) {
    passwordResetStore.delete(token);
    return null;
  }
  return request.email;
}
