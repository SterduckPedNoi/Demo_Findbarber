import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Appointment } from '../types';

interface BookingHistoryProps {
  appointments: Appointment[];
}

const BookingHistory: React.FC<BookingHistoryProps> = ({ appointments }) => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status === filter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">Booking History</h2>
      
      {/* Filter tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md whitespace-nowrap ${
            filter === 'all' 
              ? 'bg-amber-600 text-white' 
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          } transition-colors duration-300`}
        >
          All Bookings
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-4 py-2 rounded-md whitespace-nowrap ${
            filter === 'upcoming' 
              ? 'bg-amber-600 text-white' 
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          } transition-colors duration-300`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-md whitespace-nowrap ${
            filter === 'completed' 
              ? 'bg-amber-600 text-white' 
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          } transition-colors duration-300`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('cancelled')}
          className={`px-4 py-2 rounded-md whitespace-nowrap ${
            filter === 'cancelled' 
              ? 'bg-amber-600 text-white' 
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          } transition-colors duration-300`}
        >
          Cancelled
        </button>
      </div>

      {/* Appointments list */}
      {filteredAppointments.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-amber-900 mb-2">No bookings found</h3>
          <p className="text-gray-600">
            {filter === 'all' 
              ? "You haven't made any bookings yet." 
              : `You don't have any ${filter} bookings.`}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAppointments.map(appointment => (
            <div 
              key={appointment.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-amber-900">{appointment.shopName}</h3>
                  <div className="flex items-center">
                    {getStatusIcon(appointment.status)}
                    <span className={`ml-1 text-sm font-medium ${
                      appointment.status === 'upcoming' ? 'text-amber-500' :
                      appointment.status === 'completed' ? 'text-green-500' :
                      'text-red-500'
                    }`}>
                      {getStatusText(appointment.status)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-amber-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{formatDate(appointment.date)}</div>
                    <div className="text-sm text-gray-600">{appointment.time}</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="font-medium text-amber-900 mb-1">Service Details</div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{appointment.service.name}</span>
                    <span className="font-medium text-amber-800">฿{appointment.service.price}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Duration: {appointment.service.duration} minutes</div>
                </div>
                
                {appointment.status === 'upcoming' && (
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300">
                      Reschedule
                    </button>
                    <button className="flex-1 py-2 bg-white text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors duration-300">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;