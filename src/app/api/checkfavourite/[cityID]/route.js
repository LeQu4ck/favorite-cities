import Favourite from "../../../../../models/favouriteModel";
import connectMongo from "../../../../../database/connection";

export async function GET(req, { params: { cityID } }) {
  try {
    await connectMongo();
    const city = await Favourite.findOne({ id: cityID });

    if (city) {
      return Response.json({
        message: true,
      });
    } else {
      return Response.json({
        message: false,
      });
    }
  } catch (error) {
    console.error(error);
    return Response.json({
      message: false,
    });
  }
}
