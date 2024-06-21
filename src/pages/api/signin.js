import { createConnection } from "mysql2/promise";

// Function to create a connection with MySQL
async function connectToDatabase() {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
    return connection;
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // connect to the database
        const connection = await connectToDatabase();

        // Get data from the request body
        const { username, password } = req.body;


        const results = await connection.execute(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password]
        );

        if (results.length > 0) {
            res.status(200).json({ message: "Login berhasil!" });
        } else {
            res.status(401).json({ message: "Username atau password salah" });
        }

        // check if the user is exist
        if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // Close the connection
        await connection.end();

        // response with the user data
        res.status(200).json(results);
    } catch (error) {
        console.error('Error connection to the database', error);
        res.status(500).json({ error: "Internal server error" });
    }
}