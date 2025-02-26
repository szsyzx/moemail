export const EMAIL_CONFIG = {
  MAX_ACTIVE_EMAILS: 999999999, // Maximum number of active emails
  POLL_INTERVAL: 10_000, // Polling interval in milliseconds
} as const

export type EmailConfig = typeof EMAIL_CONFIG 
