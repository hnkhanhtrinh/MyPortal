import createError from 'http-errors';
import express, { json, urlencoded} from 'express';
import { resolve } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { config } from "dotenv";
config();
var app = express();

import routes from './routes/index.js';
import { init } from './config/db.js';
console.log("URI", process.env.MONGODB_URI)
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
init();
app.use('/', express.static(resolve('./public')));
//register routes 
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

export default app;
