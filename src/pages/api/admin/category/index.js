import Category from 'src/models/Category';
import connectDB from 'src/utils/connectDB';

const handler = async (_req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    const categories = await Category.find({});
    return res.status(200).json({ categories });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;
