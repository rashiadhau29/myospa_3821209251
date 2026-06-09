// // controllers/authController.js
// import db from "../database/db.js";

// // Helper function to get user by username
// const getUserByUsername = async (username) => {
//   const rows = await db.query("SELECT * FROM users WHERE username = ?", [username]);
//   return rows.length > 0 ? rows[0] : null;
// };


// // SignIn controller without bcrypt
// export const signIn = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: "Please provide both username and password" });
//     }

//     const user = await getUserByUsername(username);
//     if (!user) {
//       return res.status(401).json({ message: "Invalid username" });
//     }

//     // Compare plaintext password
//     if (password !== user.password) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Login successful
//     res.status(200).json({
//       message: "Sign-in successful",
//       user: {
//         id: user.id,
//         username: user.username,
//         name: user.name,
//       },
//     });
//   } catch (error) {
//     console.error("Sign-in error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
const db = require("../database/db");

// Helper function to get user by username
const getUserByUsername = async (username) => {
  const rows = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );
  return rows.length > 0 ? rows[0] : null;
};

// SignIn controller
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Please provide both username and password",
      });
    }

    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid username",
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    res.status(200).json({
      message: "Sign-in successful",
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Sign-in error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { signIn };