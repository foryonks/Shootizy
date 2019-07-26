db = db.getSiblingDB("shootizy");

/**
 * newsletter table format : { email, ...optins (general, partners...) }
 */

// Create index for fast search
db.newsletter.createIndex({ email: 1 }, { unique: true });
