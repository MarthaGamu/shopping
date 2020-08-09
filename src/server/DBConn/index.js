import { connect } from 'mongoose';
export default async () => {
  const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  try {
    const con = await connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.0uzay.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      },
    );
    console.log(`connect mongoDB at host ${con.connection.host}`);
  } catch ({ msg }) {
    console.log('Failed to connect to DB', msg);
  }
};
