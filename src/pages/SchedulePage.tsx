import React, { useState, useEffect } from 'react';
import { ScheduleEvent, TimeSlot } from '../types';

const SchedulePage: React.FC = () => {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{ timeSlot: TimeSlot; day: number } | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Days of the week
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dayNumbers = ['01', '02', '03', '04', '05', '06', '07'];

  // Time slots (based on the image)
  const timeSlots: TimeSlot[] = [
    { startTime: '08:40', endTime: '09:30', label: '8:40 - 9:30' },
    { startTime: '09:40', endTime: '10:30', label: '9:40 - 10:30' },
    { startTime: '10:40', endTime: '11:30', label: '10:40 - 11:30' },
    { startTime: '11:40', endTime: '12:30', label: '11:40 - 12:30' },
    { startTime: '13:20', endTime: '14:10', label: '13:20 - 14:10' },
    { startTime: '14:20', endTime: '15:10', label: '14:20 - 15:10' },
    { startTime: '15:20', endTime: '16:10', label: '15:20 - 16:10' },
    { startTime: '16:20', endTime: '17:10', label: '16:20 - 17:10' },
    { startTime: '17:35', endTime: '18:25', label: '17:35 - 18:25' },
    { startTime: '18:35', endTime: '19:25', label: '18:35 - 19:25' },
  ];

  // Event colors by type
  const eventColors = {
    course: {
      'C2': 'bg-blue-200 text-blue-800 border-blue-300',
      'L1': 'bg-green-200 text-green-800 border-green-300',
      'L2': 'bg-purple-200 text-purple-800 border-purple-300',
      'L3': 'bg-yellow-200 text-yellow-800 border-yellow-300',
      'L4': 'bg-pink-200 text-pink-800 border-pink-300',
      'L5': 'bg-indigo-200 text-indigo-800 border-indigo-300',
      'L6': 'bg-red-200 text-red-800 border-red-300',
      'L7': 'bg-orange-200 text-orange-800 border-orange-300',
      'L8': 'bg-teal-200 text-teal-800 border-teal-300',
      'L9': 'bg-amber-200 text-amber-800 border-amber-300',
      'L10': 'bg-emerald-200 text-emerald-800 border-emerald-300',
    },
    event: 'bg-gray-200 text-gray-800 border-gray-300',
    dayoff: 'bg-red-100 text-red-800 border-red-300',
  };

  // Load events from localStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem('scheduleEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem('scheduleEvents', JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (eventData: Omit<ScheduleEvent, 'id'>) => {
    const newEvent: ScheduleEvent = {
      ...eventData,
      id: Date.now().toString(),
    };
    setEvents(prev => [...prev, newEvent]);
    setIsAddEventModalOpen(false);
    setSelectedTimeSlot(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const getEventsForSlot = (day: number, timeSlot: TimeSlot) => {
    return events.filter(event => 
      event.day === day && 
      event.startTime === timeSlot.startTime &&
      event.endTime === timeSlot.endTime
    );
  };

  const getEventColor = (event: ScheduleEvent) => {
    if (event.type === 'course') {
      const coursePrefix = event.title.split(':')[0] || event.title.split(' ')[0];
      return eventColors.course[coursePrefix as keyof typeof eventColors.course] || eventColors.course.C2;
    }
    return eventColors[event.type];
  };

  const openAddEventModal = (timeSlot: TimeSlot, day: number) => {
    setSelectedTimeSlot({ timeSlot, day });
    setIsAddEventModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Schedule</h1>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                📅 Monthly
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
                📅 Weekly
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                📋 Table
              </button>
            </div>
            
            <input
              type="text"
              placeholder="Filter tasks..."
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">All course</option>
              <option value="course">Course only</option>
              <option value="event">Event only</option>
            </select>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-8 border-b border-gray-200">
            <div className="p-4 bg-gray-50 border-r border-gray-200 text-center">
              <div className="text-sm font-medium text-gray-600">Day</div>
              <div className="text-xs text-gray-500 mt-1">時間</div>
            </div>
            {days.map((day, index) => (
              <div key={day} className="p-4 bg-gray-50 border-r border-gray-200 last:border-r-0 text-center">
                <div className="font-medium text-gray-900">{day}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">{dayNumbers[index]}</div>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          {timeSlots.map((timeSlot, timeIndex) => (
            <div key={timeSlot.label} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0">
              {/* Time Label */}
              <div className="p-3 bg-gray-50 border-r border-gray-200 text-center">
                <div className="text-sm font-medium text-gray-700">{timeSlot.label}</div>
                {timeIndex < 4 && <div className="text-xs text-gray-500 mt-1">午前</div>}
                {timeIndex >= 4 && timeIndex < 7 && <div className="text-xs text-gray-500 mt-1">午後</div>}
                {timeIndex >= 7 && <div className="text-xs text-gray-500 mt-1">夜間</div>}
              </div>

              {/* Day Columns */}
              {days.map((day, dayIndex) => {
                const dayEvents = getEventsForSlot(dayIndex, timeSlot);
                const isWeekend = dayIndex >= 5;
                
                return (
                  <div 
                    key={`${day}-${timeSlot.label}`}
                    className={`p-2 border-r border-gray-200 last:border-r-0 min-h-[80px] relative cursor-pointer hover:bg-gray-50 ${
                      isWeekend ? 'bg-red-50' : ''
                    }`}
                    onClick={() => openAddEventModal(timeSlot, dayIndex)}
                  >
                    {isWeekend && dayEvents.length === 0 && (
                      <div className="text-center text-red-400 text-sm font-medium">Off</div>
                    )}
                    
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs p-2 rounded mb-1 border cursor-pointer hover:shadow-sm ${getEventColor(event)}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm('Delete this event?')) {
                            handleDeleteEvent(event.id);
                          }
                        }}
                      >
                        <div className="font-medium truncate">{event.title}</div>
                        {event.description && (
                          <div className="opacity-75 truncate">{event.description}</div>
                        )}
                      </div>
                    ))}
                    
                    {dayEvents.length === 0 && !isWeekend && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-gray-600 text-lg">+</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-5 gap-4 text-center text-sm">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="font-medium mb-1">修了検定</div>
            <div className="text-gray-600">仮免学科</div>
            <div className="text-gray-600">学科効果</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="font-medium mb-1">修了検定</div>
            <div className="text-gray-600">仮免学科</div>
            <div className="text-gray-600">学科効果</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="font-medium mb-1">修了検定</div>
            <div className="text-gray-600">仮免学科</div>
            <div className="text-gray-600">学科効果</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="font-medium mb-1">卒業検定</div>
            <div className="text-gray-600">学科効果</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="font-medium mb-1">修了検定</div>
            <div className="text-gray-600">仮免学科</div>
            <div className="text-gray-600">学科効果</div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {isAddEventModalOpen && selectedTimeSlot && (
        <AddEventModal
          timeSlot={selectedTimeSlot.timeSlot}
          day={selectedTimeSlot.day}
          dayName={days[selectedTimeSlot.day]}
          onAdd={handleAddEvent}
          onClose={() => {
            setIsAddEventModalOpen(false);
            setSelectedTimeSlot(null);
          }}
        />
      )}
    </div>
  );
};

// Add Event Modal Component
const AddEventModal: React.FC<{
  timeSlot: TimeSlot;
  day: number;
  dayName: string;
  onAdd: (event: Omit<ScheduleEvent, 'id'>) => void;
  onClose: () => void;
}> = ({ timeSlot, day, dayName, onAdd, onClose }) => {
  const [eventType, setEventType] = useState<'course' | 'event' | 'dayoff'>('course');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title: title.trim(),
      description: description.trim(),
      type: eventType,
      startTime: timeSlot.startTime,
      endTime: timeSlot.endTime,
      day,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-lg font-medium mb-4">Add new event</h3>
        
        <div className="mb-4 text-sm text-gray-600">
          {dayName} - {timeSlot.label}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Event Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEventType('event')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  eventType === 'event' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Event
              </button>
              <button
                type="button"
                onClick={() => setEventType('course')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  eventType === 'course' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Course
              </button>
              <button
                type="button"
                onClick={() => setEventType('dayoff')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  eventType === 'dayoff' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Day off
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={eventType === 'course' ? 'e.g. C2 - 項目 1' : 'Event title'}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description (optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Additional details..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchedulePage; 