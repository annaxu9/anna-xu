import { useState } from 'react';

export default function EditDateModal({ isOpen, onClose, entry, onSubmit, pin, setPin }) {
    // Format the date to YYYY-MM-DD
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [newDate, setNewDate] = useState(entry ? formatDate(entry.entry_date) : '');
    const [newText, setNewText] = useState(entry ? entry.entry_text : '');

    if (!isOpen) return null;

    // In your EditDateModal component
    const handleSave = async () => {
        const success = await onSubmit(entry.id, newDate, newText);
        if (success) {
            onClose();
        }
    };

    console.log(newText)


    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
                <h2 className="text-lg font-bold mb-2">Edit Entry</h2>
                <textarea
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full h-24 p-2 border border-gray-300 rounded mb-2"
                />
                <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="p-1 border border-gray-300 rounded w-full mb-2"
                />
                <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter PIN"
                    className="p-1 border border-gray-300 rounded w-full mb-2"
                />
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-gray-300 px-4 py-1 rounded mr-2">Cancel</button>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-1 rounded">Save</button>
                </div>
            </div>
        </div>
    );
}
