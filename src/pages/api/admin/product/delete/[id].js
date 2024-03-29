import Product from 'src/models/Product';
import connectDB from 'src/utils/connectDB';

const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === 'DELETE') {
    try {
      // Connect MongoDB
      await connectDB();

      const deleted = await Product.findByIdAndRemove(id);
      
      if (deleted) {
        return res
          .status(200)
          .json({ message: 'Product deleted successfully' });
      } else {
        return res.status(400).json({ error: 'Something went wrong' });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;

