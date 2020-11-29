import userRoute from './user.routes'
export default function (app) {
  // User Routes
  app.use('/api/user', userRoute());
};

