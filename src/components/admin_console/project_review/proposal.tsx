'use client';
import React, { useState } from 'react';
import Dialog2 from './dialog2'; // Adjust path as needed

const Proposal: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [timeSlotReview, setTimeSlotReview] = useState<{ date: string; slots: string[] } | null>(
        null
    );

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleFixMeeting = (date: string, slots: string[]) => {
        setTimeSlotReview({ date, slots });
        setIsDialogOpen(false); // Close the dialog after fixing the meeting
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Meeting Scheduler</h1>
            <button
                onClick={handleOpenDialog}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Schedule a Meeting
            </button>

            {/* Time Slot Review Table */}
            {timeSlotReview && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold underline mb-4">Time Slot Review</h2>
                    <table className="w-full border-2 border-black rounded-lg">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2 bg-black text-white">Date</th>
                                <th className="border border-gray-300 p-2 bg-black text-white">Time Slots</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">{timeSlotReview.date}</td>
                                <td className="border border-gray-300 p-2">
                                    {timeSlotReview.slots.length > 0
                                        ? timeSlotReview.slots.join(', ')
                                        : 'No slots available'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Dialog2 Component */}
            <Dialog2 isOpen={isDialogOpen} onClose={handleCloseDialog} onFix={handleFixMeeting} />
        </div>
    );
};

export default Proposal;
