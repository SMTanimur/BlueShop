import User from "src/models/User";
import connectDB from "src/utils/connectDB";


const handler = async (_req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    const users = await User.find({});

    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;