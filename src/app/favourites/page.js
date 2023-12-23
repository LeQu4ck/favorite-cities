"use client";

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

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
    <Box display="flex" justifyContent="center">
      {data.map((item) => (
        <SavedCity key={item.id} City={item} />
      ))}
    </Box>
  );
}
