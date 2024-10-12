import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

// Thêm dòng này vào đầu tệp
console.log("DATABASE_URL:", process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

export default db;