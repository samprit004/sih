import React, { useState } from 'react';
import { format } from 'date-fns';

interface Dialog2Props {
    isOpen: boolean;
    onClose: () => void;
    onFix: (date: string, slots: string[]) => void;
}

const Dialog2: React.FC<Dialog2Props> = ({ isOpen, onClose, onFix }) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);

    const handleDateSelect = (date: Date, slots: string[]) => {
        setSelectedDate(format(date, 'yyyy-MM-dd'));
        setAvailableSlots(slots);
    };

    const handleFix = () => {
        if (selectedDate) {
            onFix(selectedDate, availableSlots);
        } else {
            alert('Please select a date.');
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="bg-white p-4 border rounded-lg">
                    {/* Calendar and Slot Selection Logic */}
                    <div className="text-center mb-4">
                        <h2 className="text-xl font-semibold">Select a Date</h2>
                        {/* Add calendar and time slot UI logic here */}
                    </div>

                    {/* Selected Slots */}
                    <div className="text-left mb-4">
                        <h3 className="text-lg font-semibold">Selected Date: {selectedDate || 'N/A'}</h3>
                        <h3 className="text-lg font-semibold">
                            Slots: {availableSlots.length > 0 ? availableSlots.join(', ') : 'No slots available'}
                        </h3>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleFix}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
