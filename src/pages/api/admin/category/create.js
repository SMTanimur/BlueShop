import { withAdmin } from "src/middleware/withAdmin";
import { withProtect } from "src/middleware/withProtect";
import Category from "src/models/Category";
import connectDB from "src/utils/connectDB";


const handler = async (req, res) => {

  const {name}=req.body
  try {
    // Connect MongoDB
    await connectDB();

    const category = new Category({
      user: req.user._id,
      name,
    });

    // Save product into database

    const createdCategory = await category.save();


    if (createdCategory) {
      return res
        .status(201)
        .json({ message: 'Added new category successfully', createdCategory });
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err.message });
  }
};

export default withProtect(withAdmin(handler))
