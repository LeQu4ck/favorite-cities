import Favourite from "../../../../models/favouriteModel";
import connectMongo from "../../../../database/connection";
import City from "@/app/city/[cityID]/page";
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
  const res = await Favourite.findOne({ id: city.id });
  if (res) {
    return Response.json({ message: "City is already saved" });
  }
  const favouriteCity = await new Favourite(city);
  await favouriteCity.save();
  return Response.json({ message: "City added to favourites!" });
}

export async function DELETE(req) {
  await connectMongo();
  const city = await req.json();
  const cityID = await city.id;

  const cityToDelete = Favourite.findOne({ id: cityID });
  await cityToDelete.deleteOne();
  return Response.json({ message: "City deleted from favourites!" });
}
