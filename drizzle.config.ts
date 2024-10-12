import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts", // Đảm bảo đường dẫn đến schema đúng
  out: "./drizzle", // Đường dẫn đầu ra cho các tệp migration
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Đảm bảo biến môi trường DATABASE_URL được nạp
  },
});