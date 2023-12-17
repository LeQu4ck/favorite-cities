"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function City() {
  const params = useParams();
  const cityID = params.name;
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchCityByID = async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/get?id=${cityID}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch city data");
        }

        const data = await response.json();
        setCityData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCityByID();
  }, [cityID]);

  return (
    <div>
      {cityData && (
        <div>
          <h1>City: {cityData.name}</h1>

          <div>
            <p>Latitude: {cityData.latitude}</p>
            <p>Longitude: {cityData.longitude}</p>
            <p>Country: {cityData.country}</p>
          </div>
        </div>
      )}
    </div>
  );
}
