
'use client';

import { useState } from 'react';

export default function FlightSearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    passengers: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'passengers' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium">Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleInputChange}
            placeholder="e.g., NYC"
            className="mt-1 p-2 w-full border rounded focus:ring-2 focus:ring-green-500"
            required
            pattern="[A-Z]{3}"
            title="Enter a valid 3-letter IATA code (e.g., NYC)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="e.g., LHR"
            className="mt-1 p-2 w-full border rounded focus:ring-2 focus:ring-green-500"
            required
            pattern="[A-Z]{3}"
            title="Enter a valid 3-letter IATA code (e.g., LHR)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring-2 focus:ring-green-500"
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Passengers</label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            min="1"
            max="9"
            className="mt-1 p-2 w-full border rounded focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mt-6 md:mt-0">
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition h-10"
          >
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
}