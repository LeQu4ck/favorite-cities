import Favourite from "../../../../models/favouriteModel";
import connectMongo from "../../../../database/connection";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongo();
  const cities = await Favourite.find({});
  console.log(cities)
  return new NextResponse().json(cities);
}

export async function POST(req) {
  await connectMongo();
  const city = await req.json();
  //console.log(city)
  const favouriteCity = await new Favourite(city);
  await favouriteCity.save();
  return new NextResponse().json({ message: "City added to favourites!" });
}

export async function DELETE(req) {
  await connectMongo();
  const ID = await req.id.json();
  console.log(ID);
  await Favourite.deleteOne({ id: ID.toString() });
  return new NextResponse().json({ message: "City deleted from favourites!" });
}