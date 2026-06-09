

// // import express from 'express'; 
// // import cors from 'cors';
// // import bodyParser from 'body-parser';
// // import contactRoute from './route/contactRoute.js';
// // import internshipRoute from './route/intershipRoute.js';
// // import jobRoutes from './route/jobRoutes.js';
// // import authRoutes from './route/authRoute.js';

// // const app = express();


// // app.use(
// //   cors({
// //     origin: ['http://localhost:5173', 'https://nehal.myospaz.in' ,'https://www.myospaz.in'],
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     allowedHeaders: ['Content-Type'],
// //   })
// // );


// // app.use(bodyParser.json());

// // app.use("/api", authRoutes);
// // app.use('/api', contactRoute);  
// // app.use('/api', internshipRoute); 
// // app.use("/api", jobRoutes);

// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });



// // import express from 'express';
// // import cors from 'cors';
// // import bodyParser from 'body-parser';
// // import contactRoute from './route/contactRoute.js';
// // import internshipRoute from './route/intershipRoute.js';
// // import jobRoutes from './route/jobRoutes.js';
// // import authRoutes from './route/authRoute.js';
// // import gallery from './route/galleryRoute.js';

// // const app = express();

// // const allowedOrigins = [
// //   'http://localhost:5173',
// //   'http://127.0.0.1:5173',
// //   'https://react5.myospaz.in',
// //   'https://nehal.myospaz.in',
// //   'https://www.myospaz.in',
// // ];

// // const corsOptions = {
// //   origin(origin, callback) {
// //     // Allow same-origin/server calls (no Origin header) and known browser origins.
// //     if (!origin || allowedOrigins.includes(origin)) {
// //       callback(null, true);
// //       return;
// //     }
// //     callback(new Error('Not allowed by CORS'));
// //   },
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,
// // };

// // app.use(cors(corsOptions));
// // app.options(/.*/, cors(corsOptions));

// // app.use(bodyParser.json());

// // // ✅ Serve uploaded files
// // app.use('/uploads', express.static('uploads'));

// // app.use("/api", authRoutes);
// // app.use('/api', contactRoute);  
// // app.use('/api', internshipRoute); 
// // app.use("/api", jobRoutes);
// // app.use("/api", gallery);

// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });




// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// import contactRoute from './route/contactRoute.js';
// import internshipRoute from './route/intershipRoute.js';
// import jobRoutes from './route/jobRoutes.js';
// import authRoutes from './route/authRoute.js';
// import gallery from './route/galleryRoute.js';

// const app = express();

// /**
//  * Allowed Frontend Domains
//  */
// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://127.0.0.1:5173',
//   'https://react5.myospaz.in',
//   'https://nehal.myospaz.in',
//   'https://www.myospaz.in',
//   'https://myospaz.in'
// ];

// /**
//  * CORS Configuration
//  */
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }

//     console.log('Blocked by CORS:', origin);
//     return callback(new Error('Not allowed by CORS'));
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

// /**
//  * Middleware
//  */
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// /**
//  * Serve Uploaded Files
//  */
// app.use('/uploads', express.static('uploads'));

// /**
//  * API Routes
//  */
// app.use('/api', authRoutes);
// app.use('/api', contactRoute);
// app.use('/api', internshipRoute);
// app.use('/api', jobRoutes);
// app.use('/api', gallery);

// /**
//  * Health Check Route
//  */
// app.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: 'Myospaz Backend Running Successfully'
//   });
// });

// /**
//  * 404 Route
//  */
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// /**
//  * Global Error Handler
//  */
// app.use((err, req, res, next) => {
//   console.error(err.stack);

//   res.status(500).json({
//     success: false,
//     message: err.message || 'Internal Server Error'
//   });
// });

// /**
//  * Start Server
//  * Important for cPanel Node.js Hosting
//  */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const contactRoute = require('./route/contactRoute');
const internshipRoute = require('./route/intershipRoute');
const jobRoutes = require('./route/jobRoutes');
const authRoutes = require('./route/authRoute');
const gallery = require('./route/galleryRoute');

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://react5.myospaz.in',
  'https://nehal.myospaz.in',
  'https://www.myospaz.in',
  'https://myospaz.in'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.log('Blocked by CORS:', origin);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static folders
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(__dirname));

// API Routes
app.use('/api', authRoutes);
app.use('/api', contactRoute);
app.use('/api', internshipRoute);
app.use('/api', jobRoutes);
app.use('/api', gallery);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend Running Successfully'
  });
});

// Frontend (React/Vite Build)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});