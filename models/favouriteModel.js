import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
export default mongoose.models.Favourite ||
  mongoose.model("Favourite", favouriteSchema);
