import { Pool } from "pg";
import 'dotenv/config';


// Only load dotenv in non-production environments:
// if (process.env.NODE_ENV !== "production"){
//     import('dotenv/config'); // loads .env variables
// }

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL, 

    // For external connections to Railway, you must enable SSL.
    ssl: {
        rejectUnauthorized: false
    }
}); 