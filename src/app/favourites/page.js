"use client";

import { useState, useEffect } from "react";

import axios from "axios";

import SavedCity from "../components/citySavedCard";

export default function Favourite() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/favourite")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <SavedCity key={item.id} city={item} />
      ))}
    </div>
  );
}
