"use client";

import { useState } from "react";

import LoadingSpinner from "./Components/LoadingSpinner";
import FlightSearchForm from "./Components/FlightSearchForm";
import FlightResultCard from "./Components/FlightResultCard";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PopularDestinations from "./Components/PopularDestinations";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async (formData) => {
    setLoading(true);
    setError(null);
    console.log("this is from formData", formData);

    try {
      const response = await fetch("/api/flights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setFlights(data.data || []);
    } catch (err) {
      setError("Failed to fetch flights. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  console.log("this is flight load data",flights)
  
  return (
    <>
    <Navbar/>
    <div className="max-w-5xl mx-auto ">
      <div className="">
        <h1 className="text-3xl font-bold text-center my-6">Flight Search</h1>

      <FlightSearchForm onSearch={handleSearch} />

      {error && <p className="text-red-500 text-center">{error}</p>}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="space-y-4">
          {flights.length > 0 ? (
            flights.map((flight) => (
              <FlightResultCard key={flight.id} flight={flight} />
            ))
          ) : (
            <p className="text-center">
              No flights found. Try adjusting your search.
            </p>
          )}
        </div>
      )}
      </div>
    </div>
    <PopularDestinations/>
      <Footer/>
    </>
  );
}

