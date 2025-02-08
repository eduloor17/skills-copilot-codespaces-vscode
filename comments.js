// Create web server
// 1. npm install express
// 2. npm install body-parser
// 3. npm install ejs
// 4. npm install mongoose
// 5. npm install method-override

// Import packages
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Create express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments_app', { useNewUrlParser: true });

// Define comment schema
const commentSchema = new mongoose.Schema({