"use client";

import { useState, useEffect } from "react";

import axios from "axios";

import SavedCity from "../components/citySavedCard";

export default function Favourite() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/favourite");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <SavedCity key={item.id} City={item} />
      ))}
    </div>
  );
}
