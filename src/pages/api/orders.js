import User from "src/models/User";
import connectDB from "src/utils/connectDB";



export default async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    if (user) {
      const { db } = await connectDB();
      let orders = await db
        .collection("orders")
        .find({ user: user.email, payment_status: "paid" })
        .sort({ timestamp: -1 })
        .toArray();
      orders = JSON.parse(JSON.stringify(orders));
      return res.status(200).json(orders);
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
