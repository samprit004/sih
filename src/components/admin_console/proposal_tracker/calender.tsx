'use client';
import React, { useState } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    getDay,
} from 'date-fns';

interface Dialog2Props {
    isOpen: boolean;
    onClose: () => void;
    onFix: (date: string | null, slots: string[]) => void;
}

const Dialog2: React.FC<Dialog2Props> = ({ isOpen, onClose, onFix }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    
    // Function to generate random available time slots
    const generateDummySlots = () => {
        return Array.from({ length: 31 }, () => {
            const slots = Math.floor(Math.random() * 4); // Random 0-3 slots
            return {
                slots,
                times:
                    slots > 0
                        ? ['10:00 AM - 12:00 PM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'].slice(
                              0,
                              slots
                          )
                        : [],
            };
        });
    };

    const getDaysInMonth = (month: Date) => {
        const start = startOfMonth(month);
        const end = endOfMonth(month);
        return eachDayOfInterval({ start, end });
    };

    const getCalendarData = (month: Date) => {
        const start = startOfMonth(month);
        const days = getDaysInMonth(month);
        const firstDay = getDay(start);
        const formattedDaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const emptyDays = Array(firstDay).fill(null);

        return {
            days: [...emptyDays, ...days],
            daysOfWeek: formattedDaysOfWeek,
        };
    };

    const { days, daysOfWeek } = getCalendarData(currentMonth);
    const daySlots = generateDummySlots();

    const handleMonthChange = (direction: string) => {
        setCurrentMonth(direction === 'next' ? addMonths(currentMonth, 1) : subMonths(currentMonth, 1));
    };

    const handleDateClick = (date: Date) => {
        const day = days.find((day) => day && day.getDate() === date.getDate());
        if (day) {
            setSelectedDate(format(date, 'yyyy-MM-dd'));
            setAvailableSlots(daySlots[date.getDate() - 1]?.times || []);
        } else {
            alert('No slots available for this date.');
        }
    };

    const handleFix = () => {
        onFix(selectedDate, availableSlots); // Pass the selected date and slots to the parent
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
                <div className="bg-white p-2 border-2 border-black  w-[800px] rounded-lg">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="text-black h-10 w-10 border-black border-2 rounded-full p-2 hover:bg-gray-300"
                        >
                            <b>✕</b>
                        </button>
                    </div>

                    {/* Calendar */}
                    <div className="flex ml-6 p-2 items-center gap-10">
                        <div>
                            <div className="border-2 mb-2 border-black p-2 rounded-md">
                                <div className="flex items-center justify-between mb-4">
                                    <button
                                        onClick={() => handleMonthChange('prev')}
                                        className="p-2 bg-gray-200 rounded"
                                    >
                                        &lt;
                                    </button>
                                    <h3 className="text-lg underline">{format(currentMonth, 'MMMM yyyy')}</h3>
                                    <button
                                        onClick={() => handleMonthChange('next')}
                                        className="p-2 bg-gray-200 rounded"
                                    >
                                        &gt;
                                    </button>
                                </div>

                                {/* Days of the Week */}
                                <div className="grid grid-cols-7 gap-2 mb-2">
                                    {daysOfWeek.map((day, index) => (
                                        <div key={index} className="text-center font-bold">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Dates */}
                                <div className="grid grid-cols-7 gap-2">
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
                                    <div className="h-5 w-5 border-2 rounded-md  border-red-700 "></div> Fully Occupied
                                </div>
                                <div className="flex items-center justify-center gap-2 w-36 h-7 border rounded-md border-black">
                                    <div className="h-5 w-5 border-2 rounded-md border-green-700 "></div> Fully Available
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 w-40 mt-2 h-7 border rounded-md border-black  ml-14">
                                <div className="h-5 w-5 border-2 rounded-md border-yellow-700 "></div> Partially Occupied
                            </div>
                        </div>

                        {/* Fixed Meeting Details (Tabular Format) */}
                        {selectedDate && (
                            <div className="">
                                <h4 className="text-xl font-semibold underline mb-3">Available Time Slots</h4>
                                {availableSlots.length > 0 ? (
                                                        <ul className="list-disc pl-5">
                                                            {availableSlots.map((slot, index) => (
                                                                <li key={index}>{slot}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>No time slots available</p>
                                                    )}
                                <h4 className="text-xl font-semibold underline mb-3">Time slot review</h4>
                                <div className="overflow-x-auto">
                                    <table className=" table-auto border-collapse border border-gray-300">
                                        <thead>
                                            <tr>
                                                <th className="border-b px-4 py-2 text-left bg-black font-thin text-white">Date</th>
                                                <td className="border-b px-4 py-2">{selectedDate}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th className="border-b px-4 py-2 text-left bg-black font-thin text-white">Available Time Slots</th>
                                               
                                                <td className="border-b px-4 py-2">
                                                    {availableSlots.length > 0 ? (
                                                        <ul className="list-disc pl-5">
                                                            {availableSlots.map((slot, index) => (
                                                                <li key={index}>{slot}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>No time slots available</p>
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        </div>
                        <div className="  ml-[500px]">
                            <button
                                onClick={handleFix}
                                className="p-2 bg-black text-white rounded w-28 "
                                disabled={!selectedDate || availableSlots.length === 0}
                            >
                                Fix
                            </button>
                        
                    </div>
                </div>
            </div>
        )
    );
};

export default Dialog2;
