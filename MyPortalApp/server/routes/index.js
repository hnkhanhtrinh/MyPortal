import userRoute from './user.routes.js'
export default function (app) {
  // User Routes
  app.use('/api/user', userRoute());
};

