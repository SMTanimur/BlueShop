import { withAdmin } from "src/middleware/withAdmin";
import { withProtect } from "src/middleware/withProtect";
import connectDB from "src/utils/connectDB";
import Product from 'src/models/Product';


const handler = async (req, res) => {
  const {...others} = req.body;

  try {
    // Connect MongoDB
    await connectDB();

    const product = new Product({
      user: req.user._id,
      ...others
    });

    // Save product into database

    const createdProduct = await product.save();

    if (createdProduct) {
      return res.status(201).json({ message: 'Product created successfully' });
    } else {
      return res.status(400).json({ error: 'Product creation failed' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default withProtect(withAdmin(handler));
