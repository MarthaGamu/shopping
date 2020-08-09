import { Schema, model } from 'mongoose';
const ProductSchema = new Schema(
  {
    id: String,
    name: String,
    description: String,
    price: Number,
    size: String,
    image: String,
  },
  {
    timestamps: true,
  },
);

export default model('product', ProductSchema);
