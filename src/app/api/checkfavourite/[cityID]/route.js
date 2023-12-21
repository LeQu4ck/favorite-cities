import Favourite from "../../../../../models/favouriteModel";
import connectMongo from "../../../../../database/connection";

export async function GET(req, { params: { id } }) {
  await connectMongo();
  const city = await Favourite.findOne(id);
  if (city) {
    return Response.json({
      message: true,
    });
  } else {
    return Response.json({
      message: false,
    });
  }
}
