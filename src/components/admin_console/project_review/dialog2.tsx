'use client';
import React, { useState, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';

interface Dialog2Props {
    isOpen: boolean;
    onClose: () => void;
}

const Dialog2: React.FC<Dialog2Props> = ({ isOpen, onClose }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);

    // Function to generate random available time slots
    const generateDummySlots = () => {
        return Array.from({ length: 31 }, () => {
            const slots = Math.floor(Math.random() * 4); // Random 0-3 slots
            return {
                slots,
                times: slots > 0 ? ['10:00 AM - 12:00 PM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'].slice(0, slots) : []
            };
        });
    };

    const getDaysInMonth = (month: Date) => {
        const start = startOfMonth(month);
        const end = endOfMonth(month);
        return eachDayOfInterval({ start, end });
    };

    // Get first day of the month and the days of the month
    const getCalendarData = (month: Date) => {
        const start = startOfMonth(month);
        const days = getDaysInMonth(month);
        const firstDay = getDay(start); // Get the day of the week for the 1st day of the month (0=Sunday, 1=Monday, etc.)
        const formattedDaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Fill the first week with empty days if the month doesn't start on Sunday
        const emptyDays = Array(firstDay).fill(null); // Empty spaces before the 1st date of the month
        
        return {
            days: [...emptyDays, ...days], // Combine empty days with the actual days of the month
            daysOfWeek: formattedDaysOfWeek
        };
    };

    const { days, daysOfWeek } = getCalendarData(currentMonth);
    const daySlots = generateDummySlots(); // Generate slots for each day of the month

    const handleMonthChange = (direction: string) => {
        setCurrentMonth(direction === 'next' ? addMonths(currentMonth, 1) : subMonths(currentMonth, 1));
    };

    const handleDateClick = (date: Date) => {
        const day = days.find(day => day && day.getDate() === date.getDate());
        if (day) {
            setSelectedDate(format(date, 'yyyy-MM-dd'));
            setAvailableSlots(daySlots[date.getDate() - 1]?.times || []);
        } else {
            alert('No slots available for this date.');
        }
    };

    const handleFix = () => {
        alert(`Meeting fixed on ${selectedDate}`);
        onClose();
    };

    const getBorderColor = (day: Date) => {
        const slots = daySlots[day.getDate() - 1]?.slots || 0;
        if (slots === 3) return 'border-green-500'; // 3 slots
        if (slots > 0) return 'border-yellow-500'; // 1 or 2 slots
        return 'border-red-500'; // 0 slots
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="">
                    <div className="bg-white p-2 border-2 border-black h-full rounded-lg">
                        {/* Close Button */}
                        <div className='flex justify-end'>
                        <button
                            onClick={onClose}
                            className="text-black h-10 w-10 border-black border-2 rounded-full p-2 hover:bg-gray-300"
                        >
                          <b>  ✕</b>
                        </button>
                        </div>
                        {/* Calendar */}
                        <div className="flex justify-center ml-16 p-2 items-center gap-10">
                            <div>
                                <div className='border-2 mb-2 border-black p-2 rounded-md'>
                                    <div className="flex items-center  justify-between mb-4">
                                        <button onClick={() => handleMonthChange('prev')} className="p-2 bg-gray-200 rounded">&lt;</button>
                                        <h3 className="text-lg underline">{format(currentMonth, 'MMMM yyyy')}</h3>
                                        <button onClick={() => handleMonthChange('next')} className="p-2 bg-gray-200 rounded">&gt;</button>
                                    </div>

                                    {/* Days of the Week */}
                                    <div className="grid grid-cols-7 gap-2 mb-4">
                                        {daysOfWeek.map((day, index) => (
                                            <div key={index} className="text-center font-bold">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Dates */}
                                    <div className="grid grid-cols-7 gap-2 mb-4">
                                        {days.map((day, index) => {
                                            const borderColor = day ? getBorderColor(day) : 'border-gray-300';
                                            return (
                                                <div
                                                    key={index}
                                                    className={`p-2 border ${borderColor} rounded cursor-pointer text-center`}
                                                    onClick={() => day && handleDateClick(day)}
                                                >
                                                    {day ? day.getDate() : ''}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Status Indicators */}
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center gap-2 w-36 h-7 border rounded-md border-black">
                                        <div className="h-5 w-5 border-2 rounded-md border-red-700 "></div> Fully Occupied
                                    </div>
                                    <div className="flex items-center justify-center gap-2 w-36 h-7 border rounded-md border-black">
                                        <div className="h-5 w-5 border-2 rounded-md border-green-700 "></div> Fully Available
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 w-40 h-7 border rounded-md border-black mt-2 ml-14">
                                    <div className="h-5 w-5 border-2 rounded-md border-yellow-700 "></div> Partially Occupied
                                </div>
                            </div>

                            {/* Time Slot Review */}
                            <div className="">
                                <h4 className="text-xl font-semibold underline mb-4">Available Time Slots</h4>
                                <div className="flex gap-2">
                                    {availableSlots.map((slot, index) => (
                                        <button
                                            key={index}
                                            className="p-2 bg-gray-200 rounded mb-10"
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>

                                <div className="font-semibold underline text-xl mb-2">Time Slot Review</div>

                                {/* Table */}
                                <table className="w-96 mb-4 border-2 border-black rounded-lg">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 p-2 bg-black text-white">Date</th>
                                            <td className="border border-gray-300 p-2">{selectedDate || 'N/A'}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="border border-gray-300 p-2 bg-black text-white">Time</th>
                                            <td className="border border-gray-300 p-2">
                                                {availableSlots.length > 0 ? availableSlots.join(' or  ') : 'N/A'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                              <div className='flex justify-center'>
                                <button
                                    onClick={handleFix}
                                    className="p-2 bg-black text-white rounded w-28"
                                    disabled={!selectedDate || availableSlots.length === 0}
                                >
                                    Fix
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Dialog2;
