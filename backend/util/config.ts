import "dotenv/config";

export default {
  DATABASE_URL: process.env.DATABASE_URL || "./db/northwind.db",
  PORT: process.env.PORT || 3001,
  CONNECTION_URL: process.env.CONNECTION_URL || "",
  ADMIN_NAME: process.env.ADMIN_NAME,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
};
