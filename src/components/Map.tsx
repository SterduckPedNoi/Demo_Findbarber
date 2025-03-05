import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BarberShop } from '../types';

interface MapProps {
  shops: BarberShop[];
  onSelectShop: (shop: BarberShop) => void;
}

const Map: React.FC<MapProps> = ({ shops, onSelectShop }) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedShopId, setSelectedShopId] = useState<string | null>(null);

  const handleGetLocation = () => {
    // Simulate getting user location
    // In a real app, you would use the browser's Geolocation API
    setUserLocation({
      lat: 13.7563,
      lng: 100.5018
    });
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-amber-900">Find Nearby Barber Shops</h2>
        <button 
          onClick={handleGetLocation}
          className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300"
        >
          <Navigation className="h-4 w-4 mr-2" />
          <span>Use My Location</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Map placeholder - in a real app, you would integrate with Google Maps or similar */}
        <div className="h-96 bg-amber-100 flex items-center justify-center relative">
          <div className="text-center p-6 bg-white rounded-lg shadow-md z-10">
            <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <p className="text-amber-800 font-medium">Map View</p>
            <p className="text-gray-600 text-sm mt-2">In a real application, this would display an interactive map with barber shop locations.</p>
          </div>

          {/* Simulated map markers */}
          {shops.map(shop => (
            <div 
              key={shop.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
              style={{ 
                left: `${(shop.location.lng - 100.5) * 500 + 50}%`, 
                top: `${(13.8 - shop.location.lat) * 500 + 50}%` 
              }}
              onClick={() => setSelectedShopId(shop.id)}
            >
              <div className="relative">
                <MapPin 
                  className={`h-8 w-8 ${selectedShopId === shop.id ? 'text-amber-600' : 'text-amber-800'}`} 
                  fill={selectedShopId === shop.id ? '#d97706' : 'none'}
                />
                {selectedShopId === shop.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white p-3 rounded-md shadow-lg z-20">
                    <h3 className="font-medium text-amber-900">{shop.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">{shop.address}</p>
                    <button
                      onClick={() => onSelectShop(shop)}
                      className="mt-2 w-full bg-amber-600 text-white text-xs py-1 rounded-md hover:bg-amber-700 transition-colors duration-300"
                    >
                      Book Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* User location marker */}
          {userLocation && (
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: `${(userLocation.lng - 100.5) * 500 + 50}%`, 
                top: `${(13.8 - userLocation.lat) * 500 + 50}%` 
              }}
            >
              <div className="h-4 w-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>

      {/* List of nearby shops */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-amber-900 mb-4">Nearby Barber Shops</h3>
        <div className="space-y-4">
          {shops.map(shop => (
            <div 
              key={shop.id}
              className={`p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${selectedShopId === shop.id ? 'border-2 border-amber-500' : ''}`}
              onClick={() => setSelectedShopId(shop.id)}
            >
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={shop.image} 
                    alt={shop.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-amber-900">{shop.name}</h4>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-1">2.3 km</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{shop.address}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectShop(shop);
                    }}
                    className="mt-2 text-sm text-amber-600 hover:text-amber-800 transition-colors duration-300"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;