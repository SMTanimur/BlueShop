
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: {
        secure_url:
          'https://res.cloudinary.com/dk6bdrkbv/image/upload/v1639407555/BlueShop/products/reogwhlq9ppdlyksgxyj.png',
      },
    },
    description: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.product || mongoose.model('product', productSchema);

export default Product;
