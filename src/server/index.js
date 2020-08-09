import express from 'express';
import DBConn from './DBConn';
import productsRoute from './routes/product';
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/products', productsRoute);
app.listen(PORT, (err) => {
  if (err) {
    console.log('Failed to start app', err);
    process.exit(1);
  }
  console.log('server started at', PORT);
  DBConn();
});
