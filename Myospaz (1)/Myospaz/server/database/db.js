

// import mysql from 'mysql2';

// //dzmbjxtk_web_myospaz


// const db = mysql.createPool({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "myospaz",
//   // port: 3307,
// });

// // Test Connection
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error("MySQL connection error:", err);
//   } else {
//     console.log("✅ Connected to MySQL database.");
//     connection.release();
//   }
// });

// const dbPromise = {
//   query: (sql, values) => {
//     return new Promise((resolve, reject) => {
//       db.query(sql, values, (err, results) => {
//         if (err) return reject(err);
//         resolve(results);
//       });
//     });
//   }
// };

// export default dbPromise;
const mysql = require("mysql2");

// dzmbjxtk_web_myospaz

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "myospaz",
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database.");
    connection.release();
  }
});

const dbPromise = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
};

module.exports = dbPromise;