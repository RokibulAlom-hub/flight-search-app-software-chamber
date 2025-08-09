
export default function PopularDestinations() {
  const destinations = [
    {
      city: 'Paris',
      country: 'France',
      price: '$450',
      duration: '7h 30m',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      price: '$800',
      duration: '13h 45m',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    },
    {
      city: 'Sydney',
      country: 'Australia',
      price: '$950',
      duration: '17h 20m',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec6b683c1b',
    },
    {
      city: 'Rome',
      country: 'Italy',
      price: '$400',
      duration: '8h 10m',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      price: '$600',
      duration: '12h 15m',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      price: '$420',
      duration: '7h 50m',
      image: 'https://images.unsplash.com/photo-1583425423320-77b9bd4e3c66',
    },
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Explore Popular Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dest.city}, {dest.country}
                </h3>
                <p className="text-gray-600 mt-1">From {dest.price}</p>
                <p className="text-gray-600">Flight Duration: {dest.duration}</p>
                <a
                  href={`/search?destination=${dest.city.toUpperCase()}`}
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
