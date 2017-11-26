// Lets grab our ENVIRONMENT VARS
require('dotenv').config();

// This jazz here if so we can use all the fancy sass on server side renders... this was a pain
import csshook from 'css-modules-require-hook/preset'; // import hook before routes
import chalk from 'chalk';
import express from 'express';
import path from 'path';
import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import knex from 'knex';
import session from 'express-session';
// import config from './config';

import MOD from './startup';
import {
  dealerRouter,
  mediaRouter,
} from './api';
import {
  customerRouter,
} from './admin/api';
import { renderClientApp } from '../client/renderers/server';
import { renderAdminApp } from '../admin/renderers/server';

// CUSTOM ROUTERS
import authRouter from './auth/localAuth';
import signupRouter from './api/routes/signup';
import loginRouter from './api/routes/login';

// CUSTOM MIDDLEWARE
import { isAuthenticated } from './middleware/client/isAuthenticated';

const app = express();
app.use(session({
  secret: 'foxesAreNice',
  resave: true,
  saveUninitialized: true,
}));
// const PROD = process.env.NODE_ENV === 'production';
const DEV = process.env.NODE_ENV === 'development';
MOD.init();

app.use(express.static(path.join(__dirname, '../public')));
// app.use('/favicon.ico', express.static(path.join(__dirname, '../public/favicon.ico')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  next();
});
// Runs our check on the tokens sent from client on every request
app.use(isAuthenticated);
console.info(`we are logging authRouter`, authRouter);
app.use('/auth', authRouter);
app.use('/user/new', signupRouter);
app.use('/user', loginRouter);
app.use('/api/dealer', dealerRouter);
app.use('/api/media', mediaRouter);
app.use('/api/customers', customerRouter);
app.get(/admin/, isAuthenticated, (req, res, next) => {
  // console.log("??????", DEV);
  // if (DEV) {
  //   return;
  // }
  renderAdminApp(req, res);
});

app.get('*', jwt({ secret: process.env.JWT_SECRET, credentialsRequired: false }), (req, res) => {
  renderClientApp(req, res);
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.info(chalk`{redBright.bold Warming up the hotplate on port 3000!!\n}`);
});
