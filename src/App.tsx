import React, { useState } from 'react';
import { Scissors, MapPin, Calendar, Heart, Clock, Star, Search, Menu, X } from 'lucide-react';
import BarberShopList from './components/BarberShopList';
import Map from './components/Map';
import Booking from './components/Booking';
import BookingHistory from './components/BookingHistory';
import Favorites from './components/Favorites';
import { BarberShop, Appointment } from './types';
import { barberShops } from './data/barberShops';

function App() {
  const [activeTab, setActiveTab] = useState<'discover' | 'map' | 'bookings' | 'favorites'>('discover');
  const [selectedShop, setSelectedShop] = useState<BarberShop | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookAppointment = (appointment: Appointment) => {
    setAppointments([...appointments, appointment]);
    setShowBooking(false);
  };

  const toggleFavorite = (shopId: string) => {
    if (favorites.includes(shopId)) {
      setFavorites(favorites.filter(id => id !== shopId));
    } else {
      setFavorites([...favorites, shopId]);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Header */}
      <header className="bg-amber-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-6 w-6" />
            <h1 className="text-xl font-bold">Find Barber</h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              className={`flex items-center space-x-1 ${activeTab === 'discover' ? 'text-amber-200' : ''}`}
              onClick={() => setActiveTab('discover')}
            >
              <Scissors className="h-5 w-5" />
              <span>Discover</span>
            </button>
            <button 
              className={`flex items-center space-x-1 ${activeTab === 'map' ? 'text-amber-200' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <MapPin className="h-5 w-5" />
              <span>Map</span>
            </button>
            <button 
              className={`flex items-center space-x-1 ${activeTab === 'bookings' ? 'text-amber-200' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              <Calendar className="h-5 w-5" />
              <span>Bookings</span>
            </button>
            <button 
              className={`flex items-center space-x-1 ${activeTab === 'favorites' ? 'text-amber-200' : ''}`}
              onClick={() => setActiveTab('favorites')}
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-amber-700 text-white">
          <div className="container mx-auto py-2 px-4 flex flex-col space-y-3">
            <button 
              className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'discover' ? 'bg-amber-600' : ''}`}
              onClick={() => {
                setActiveTab('discover');
                setMobileMenuOpen(false);
              }}
            >
              <Scissors className="h-5 w-5" />
              <span>Discover</span>
            </button>
            <button 
              className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'map' ? 'bg-amber-600' : ''}`}
              onClick={() => {
                setActiveTab('map');
                setMobileMenuOpen(false);
              }}
            >
              <MapPin className="h-5 w-5" />
              <span>Map</span>
            </button>
            <button 
              className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'bookings' ? 'bg-amber-600' : ''}`}
              onClick={() => {
                setActiveTab('bookings');
                setMobileMenuOpen(false);
              }}
            >
              <Calendar className="h-5 w-5" />
              <span>Bookings</span>
            </button>
            <button 
              className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'favorites' ? 'bg-amber-600' : ''}`}
              onClick={() => {
                setActiveTab('favorites');
                setMobileMenuOpen(false);
              }}
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </button>
          </div>
        </div>
      )}

      {/* Search bar */}
      {(activeTab === 'discover' || activeTab === 'map') && (
        <div className="bg-amber-100 p-4 shadow-sm">
          <div className="container mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for barber shops..."
                className="w-full p-3 pl-10 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        {showBooking && selectedShop && (
          <Booking 
            shop={selectedShop} 
            onClose={() => setShowBooking(false)} 
            onBook={handleBookAppointment}
          />
        )}
        
        {!showBooking && (
          <>
            {activeTab === 'discover' && (
              <BarberShopList 
                shops={barberShops} 
                favorites={favorites}
                onSelectShop={(shop) => {
                  setSelectedShop(shop);
                  setShowBooking(true);
                }}
                onToggleFavorite={toggleFavorite}
              />
            )}
            
            {activeTab === 'map' && (
              <Map 
                shops={barberShops} 
                onSelectShop={(shop) => {
                  setSelectedShop(shop);
                  setShowBooking(true);
                }}
              />
            )}
            
            {activeTab === 'bookings' && (
              <BookingHistory appointments={appointments} />
            )}
            
            {activeTab === 'favorites' && (
              <Favorites 
                shops={barberShops.filter(shop => favorites.includes(shop.id))}
                onSelectShop={(shop) => {
                  setSelectedShop(shop);
                  setShowBooking(true);
                }}
                onToggleFavorite={toggleFavorite}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2025 Find Barber - Find the perfect barber shop near you</p>
        </div>
      </footer>
    </div>
  );
}

export default App;