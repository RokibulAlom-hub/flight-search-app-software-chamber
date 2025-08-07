export default function FlightResultCard({ flight }) {
  const segments = flight.itineraries[0].segments;
  const firstSegment = segments[0];
  const lastSegment = segments[segments.length - 1];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 transition hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold text-gray-800">
          ✈️ {firstSegment.carrierCode}
        </div>
        <div className="text-lg font-bold text-blue-600">
          {flight.price.total} {flight.price.currency}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <p className="font-medium">Departure</p>
          <p>{firstSegment.departure.iataCode} → {lastSegment.arrival.iataCode}</p>
          <p>{new Date(firstSegment.departure.at).toLocaleString()}</p>
        </div>

        <div>
          <p className="font-medium">Arrival</p>
          <p>{lastSegment.arrival.iataCode}</p>
          <p>{new Date(lastSegment.arrival.at).toLocaleString()}</p>
        </div>

        <div>
          <p className="font-medium">Stops</p>
          <p>{segments.length - 1 === 0 ? "Direct" : `${segments.length - 1} Stop(s)`}</p>
        </div>

        <div>
          <p className="font-medium">Duration</p>
          <p>{flight.itineraries[0].duration.replace("PT", "").toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
}
