import "dotenv/config";

export default {
  DATABASE_URL: process.env.DATABASE_URL || "./db/northwind.db",
  PORT: process.env.PORT || 3001,
};
