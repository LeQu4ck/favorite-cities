import mongoose from 'mongoose';

const connectMongo = async () => {
  await mongoose.connect(process.env.DB_URI);
};

export default connectMongo;