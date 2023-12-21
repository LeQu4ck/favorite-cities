import Favourite from "../../../../models/favouriteModel";
import connectMongo from "../../../../database/connection";
//import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongo();
  const cities = await Favourite.find({});
  console.log(cities);
  return Response.json(cities);
}

export async function POST(req) {
  await connectMongo();
  const city = await req.json();
  const favouriteCity = await new Favourite(city);
  await favouriteCity.save();
  return Response.json({ message: "City added to favourites!" });
}

export async function DELETE(req) {
  await connectMongo();
  const city = await req.body;
  const cityID = city.id
  console.log(city);
  await Favourite.findOneAndDelete({ cityID });
  return Response.json({ message: "City deleted from favourites!" });
}
