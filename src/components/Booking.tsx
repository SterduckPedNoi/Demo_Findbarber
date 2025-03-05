import React, { useState } from 'react';
import { X, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { BarberShop, Service, Appointment } from '../types';

interface BookingProps {
  shop: BarberShop;
  onClose: () => void;
  onBook: (appointment: Appointment) => void;
}

const Booking: React.FC<BookingProps> = ({ shop, onClose, onBook }) => {
  const [step, setStep] = useState<'service' | 'datetime'>('service');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM'
  ];

  const handleBookAppointment = () => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    const appointment: Appointment = {
      id: Math.random().toString(36).substring(2, 11),
      shopId: shop.id,
      shopName: shop.name,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      status: 'upcoming',
      createdAt: new Date().toISOString()
    };

    onBook(appointment);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-amber-700 text-white p-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{shop.name}</h2>
          <p className="text-sm text-amber-100">{shop.address}</p>
        </div>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-amber-600 transition-colors duration-300"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {step === 'service' ? (
          <>
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Select a Service</h3>
            <div className="space-y-3">
              {shop.services.map(service => (
                <div 
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors duration-300 ${
                    selectedService?.id === service.id 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-amber-900">{service.name}</h4>
                    <span className="font-medium text-amber-700">฿{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{service.duration} minutes</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => selectedService && setStep('datetime')}
              disabled={!selectedService}
              className={`mt-6 w-full py-3 rounded-lg font-medium ${
                selectedService 
                  ? 'bg-amber-600 text-white hover:bg-amber-700' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              } transition-colors duration-300`}
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => setStep('service')}
              className="flex items-center text-amber-700 mb-4 hover:text-amber-900 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Services</span>
            </button>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Selected Service</h3>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-amber-900">{selectedService?.name}</h4>
                  <span className="font-medium text-amber-700">฿{selectedService?.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{selectedService?.duration} minutes</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-amber-700 mr-2" />
                <h3 className="text-lg font-semibold text-amber-900">Select Date</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                {dates.map(date => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-2 text-center rounded-md transition-colors duration-300 ${
                      selectedDate === date 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                    }`}
                  >
                    <div className="text-xs">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                    <div className="font-medium">{new Date(date).getDate()}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-amber-700 mr-2" />
                <h3 className="text-lg font-semibold text-amber-900">Select Time</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-center rounded-md transition-colors duration-300 ${
                      selectedTime === time 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleBookAppointment}
              disabled={!selectedDate || !selectedTime}
              className={`mt-6 w-full py-3 rounded-lg font-medium ${
                selectedDate && selectedTime 
                  ? 'bg-amber-600 text-white hover:bg-amber-700' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              } transition-colors duration-300`}
            >
              Book Appointment
            </button>
          </>
        )}
      </div>

      {/* Summary */}
      {step === 'datetime' && selectedDate && selectedTime && (
        <div className="bg-amber-50 p-4 border-t border-amber-200">
          <h3 className="font-medium text-amber-900 mb-2">Appointment Summary</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-600">Barber Shop:</div>
            <div className="font-medium text-amber-900">{shop.name}</div>
            
            <div className="text-gray-600">Service:</div>
            <div className="font-medium text-amber-900">{selectedService?.name}</div>
            
            <div className="text-gray-600">Price:</div>
            <div className="font-medium text-amber-900">฿{selectedService?.price}</div>
            
            <div className="text-gray-600">Date:</div>
            <div className="font-medium text-amber-900">{formatDate(selectedDate)}</div>
            
            <div className="text-gray-600">Time:</div>
            <div className="font-medium text-amber-900">{selectedTime}</div>
            
            <div className="text-gray-600">Duration:</div>
            <div className="font-medium text-amber-900">{selectedService?.duration} minutes</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;