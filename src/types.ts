export interface BarberShop {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  image: string;
  services: Service[];
  location: {
    lat: number;
    lng: number;
  };
  openingHours: {
    [key: string]: string;
  };
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
}

export interface Appointment {
  id: string;
  shopId: string;
  shopName: string;
  service: Service;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  createdAt: string;
}