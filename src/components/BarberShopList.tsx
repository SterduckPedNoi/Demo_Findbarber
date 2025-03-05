import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';
import { BarberShop } from '../types';

interface BarberShopListProps {
  shops: BarberShop[];
  favorites: string[];
  onSelectShop: (shop: BarberShop) => void;
  onToggleFavorite: (shopId: string) => void;
}

const BarberShopList: React.FC<BarberShopListProps> = ({ 
  shops, 
  favorites, 
  onSelectShop, 
  onToggleFavorite 
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">Discover Barber Shops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shops.map(shop => (
          <div 
            key={shop.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img 
                src={shop.image} 
                alt={shop.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(shop.id);
                }}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
              >
                <Heart 
                  className={`h-5 w-5 ${favorites.includes(shop.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-amber-900">{shop.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span className="ml-1 text-sm font-medium">{shop.rating}</span>
                </div>
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <p className="text-sm">{shop.address}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Services:</span> {shop.services.map(s => s.name).join(', ')}
                </p>
              </div>
              <button
                onClick={() => onSelectShop(shop)}
                className="mt-4 w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarberShopList;