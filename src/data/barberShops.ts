import { BarberShop } from '../types';

export const barberShops: BarberShop[] = [
  {
    id: '1',
    name: 'Classic Cuts Barber Shop',
    address: '123 Main St, Bangkok',
    phone: '02-123-4567',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    services: [
      { id: '1-1', name: 'Haircut', price: 300, duration: 30 },
      { id: '1-2', name: 'Beard Trim', price: 150, duration: 15 },
      { id: '1-3', name: 'Haircut & Beard', price: 400, duration: 45 },
      { id: '1-4', name: 'Hair Styling', price: 250, duration: 20 },
    ],
    location: {
      lat: 13.7563,
      lng: 100.5018
    },
    openingHours: {
      'Monday': '9:00 AM - 7:00 PM',
      'Tuesday': '9:00 AM - 7:00 PM',
      'Wednesday': '9:00 AM - 7:00 PM',
      'Thursday': '9:00 AM - 7:00 PM',
      'Friday': '9:00 AM - 8:00 PM',
      'Saturday': '9:00 AM - 8:00 PM',
      'Sunday': '10:00 AM - 6:00 PM'
    }
  },
  {
    id: '2',
    name: 'Modern Gents Barbershop',
    address: '456 Sukhumvit Rd, Bangkok',
    phone: '02-234-5678',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    services: [
      { id: '2-1', name: 'Premium Haircut', price: 450, duration: 45 },
      { id: '2-2', name: 'Beard Grooming', price: 200, duration: 20 },
      { id: '2-3', name: 'Hot Towel Shave', price: 350, duration: 30 },
      { id: '2-4', name: 'Hair Coloring', price: 1200, duration: 90 },
    ],
    location: {
      lat: 13.7308,
      lng: 100.5340
    },
    openingHours: {
      'Monday': '10:00 AM - 8:00 PM',
      'Tuesday': '10:00 AM - 8:00 PM',
      'Wednesday': '10:00 AM - 8:00 PM',
      'Thursday': '10:00 AM - 8:00 PM',
      'Friday': '10:00 AM - 9:00 PM',
      'Saturday': '9:00 AM - 9:00 PM',
      'Sunday': '11:00 AM - 7:00 PM'
    }
  },
  {
    id: '3',
    name: 'Vintage Barber Co.',
    address: '789 Silom Rd, Bangkok',
    phone: '02-345-6789',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1521490683712-35a1cb305110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    services: [
      { id: '3-1', name: 'Signature Haircut', price: 500, duration: 45 },
      { id: '3-2', name: 'Royal Shave', price: 400, duration: 30 },
      { id: '3-3', name: 'Hair & Beard Package', price: 800, duration: 75 },
      { id: '3-4', name: 'Kid\'s Haircut', price: 250, duration: 20 },
    ],
    location: {
      lat: 13.7262,
      lng: 100.5230
    },
    openingHours: {
      'Monday': 'Closed',
      'Tuesday': '11:00 AM - 8:00 PM',
      'Wednesday': '11:00 AM - 8:00 PM',
      'Thursday': '11:00 AM - 8:00 PM',
      'Friday': '11:00 AM - 9:00 PM',
      'Saturday': '10:00 AM - 9:00 PM',
      'Sunday': '10:00 AM - 6:00 PM'
    }
  },
  {
    id: '4',
    name: 'The Gentleman\'s Lounge',
    address: '101 Thonglor, Bangkok',
    phone: '02-456-7890',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    services: [
      { id: '4-1', name: 'Executive Haircut', price: 600, duration: 45 },
      { id: '4-2', name: 'Luxury Beard Trim', price: 300, duration: 30 },
      { id: '4-3', name: 'Scalp Treatment', price: 500, duration: 40 },
      { id: '4-4', name: 'VIP Package', price: 1500, duration: 120 },
    ],
    location: {
      lat: 13.7372,
      lng: 100.5788
    },
    openingHours: {
      'Monday': '12:00 PM - 9:00 PM',
      'Tuesday': '12:00 PM - 9:00 PM',
      'Wednesday': '12:00 PM - 9:00 PM',
      'Thursday': '12:00 PM - 9:00 PM',
      'Friday': '12:00 PM - 10:00 PM',
      'Saturday': '10:00 AM - 10:00 PM',
      'Sunday': '10:00 AM - 8:00 PM'
    }
  },
  {
    id: '5',
    name: 'Urban Cuts',
    address: '222 Ratchada Rd, Bangkok',
    phone: '02-567-8901',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    services: [
      { id: '5-1', name: 'Modern Haircut', price: 350, duration: 30 },
      { id: '5-2', name: 'Fade Specialist', price: 400, duration: 40 },
      { id: '5-3', name: 'Hair Design', price: 500, duration: 45 },
      { id: '5-4', name: 'Student Haircut', price: 250, duration: 25 },
    ],
    location: {
      lat: 13.8058,
      lng: 100.5698
    },
    openingHours: {
      'Monday': '10:00 AM - 8:00 PM',
      'Tuesday': '10:00 AM - 8:00 PM',
      'Wednesday': '10:00 AM - 8:00 PM',
      'Thursday': '10:00 AM - 8:00 PM',
      'Friday': '10:00 AM - 9:00 PM',
      'Saturday': '9:00 AM - 9:00 PM',
      'Sunday': '10:00 AM - 7:00 PM'
    }
  },
  {
    id: '6',
    name: 'Thai Traditional Barber',
    address: '333 Yaowarat Rd, Bangkok',
    phone: '02-678-9012',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1622288432450-277d0fef9f14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    services: [
      { id: '6-1', name: 'Traditional Haircut', price: 280, duration: 30 },
      { id: '6-2', name: 'Classic Shave', price: 220, duration: 25 },
      { id: '6-3', name: 'Head Massage', price: 200, duration: 20 },
      { id: '6-4', name: 'Complete Package', price: 650, duration: 75 },
    ],
    location: {
      lat: 13.7393,
      lng: 100.5101
    },
    openingHours: {
      'Monday': '8:00 AM - 6:00 PM',
      'Tuesday': '8:00 AM - 6:00 PM',
      'Wednesday': '8:00 AM - 6:00 PM',
      'Thursday': '8:00 AM - 6:00 PM',
      'Friday': '8:00 AM - 6:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': 'Closed'
    }
  }
];