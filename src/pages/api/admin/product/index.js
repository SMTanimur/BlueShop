
import Product from 'src/models/Product';
import connectDB from 'src/utils/connectDB';

export default async (_req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    // Get all products
    const products = await Product.find({})
      .populate('category');

    return res.json({ products });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
