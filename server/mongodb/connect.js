import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => {
      console.error('Failed to connect with MongoDB');
      console.log(error);
    });
}

export default connectDB;
