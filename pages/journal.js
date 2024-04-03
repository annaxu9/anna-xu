// pages/journal.js
import { useState, useEffect } from 'react';
import EditEntryModel from '../components/Journal/EditEntryModel';

function Journal() {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const [entries, setEntries] = useState([]);
    const [entryText, setEntryText] = useState('');
    const [privacy, setPrivacy] = useState('public');
    const [date, setDate] = useState(currentDate); // Current Date
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [userPin, setUserPin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);
    
    const correctPin = '5188';
    const correctPassword = 'hydrangea';

    useEffect(() => {
        const fetchEntries = async () => {
            if (userPassword === correctPassword) {
                const response = await fetch(`/api/journal?month=${selectedMonth}&year=${selectedYear}&includePrivate=true`);
                const data = await response.json();
                setEntries(data);
            } else {
                const response = await fetch(`/api/journal?month=${selectedMonth}&year=${selectedYear}&includePrivate=false`);
                const data = await response.json();
                setEntries(data);
            }
        };
        fetchEntries();
    }, [selectedMonth, selectedYear, userPassword]);
    

    // Handle adding a new journal entry
    const addEntry = async () => {
        if (userPin !== correctPin) {
            alert('Incorrect PIN. Please try again.');
            return;
        }
        const response = await fetch('/api/journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                entry_date: date, // Current date in YYYY-MM-DD format
                entry_text: entryText,
                privacy: privacy,
            }),
        });
        if (response.ok) {
            setEntryText('');
            setPrivacy('public');
        }
    };

    // Function to delete an entry
    const deleteEntry = async (id) => {
        const pin = prompt('Enter PIN to delete this entry:');
        if (pin !== correctPin) {
            alert('Incorrect PIN.');
            return;
        }

        const response = await fetch('/api/journal', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            setEntries(entries.filter(entry => entry.id !== id));
        }
    };

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    // Group entries by date
    const groupedEntries = entries.reduce((acc, entry) => {
        (acc[entry.entry_date] = acc[entry.entry_date] || []).push(entry);
        return acc;
    }, {});

    const handleEditClick = (entry) => {
        setSelectedEntry(entry);
        setIsModalOpen(true);
    };
    


// The updateEntry function
const updateEntry = async (id, newDate, newText) => {
    console.log("newText", newText);
    if (userPin !== correctPin) {
        alert('Incorrect PIN. Please try again.');
        return false; // Indicate that the update was not successful
    }
    const response = await fetch('/api/journal', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            entry_date: newDate,
            entry_text: newText,
        }),
    });
    if (response.ok) {
        // Update was successful
        return true;
    } else {
        // There was an error
        const errorText = await response.text();
        console.error('Error updating entry:', errorText);
        alert('Error updating entry. Please try again.');
        return false;
    }
};

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEntry(null);
    };

    return (
        <div className="m-4 mx-6 mx-auto p-4">
            <h1 className="text-xl font-bold mb-4 text-center">Journal</h1>
            <div className="mb-4">
                <textarea
                    value={entryText}
                    onChange={(e) => setEntryText(e.target.value)}
                    className="w-full h-24 p-2 border border-gray-300 rounded mb-2"
                />
                <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                        <input
                            type="radio"
                            id="public"
                            name="privacy"
                            value="public"
                            checked={privacy === 'public'}
                            onChange={(e) => setPrivacy(e.target.value)}
                            className="form-radio mr-2"
                        />
                        <label htmlFor="public" className="cursor-pointer">Public</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="radio"
                            id="private"
                            name="privacy"
                            value="private"
                            checked={privacy === 'private'}
                            onChange={(e) => setPrivacy(e.target.value)}
                            className="form-radio mr-2"
                        />
                        <label htmlFor="private" className="cursor-pointer">Private</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="p-1 border border-gray-300 rounded w-30 text-center mr-2"
                        />
                    </div>
                </div>
                <div className='mb-4'>

                
                </div>   
                <div className="mb-4">
                    <input
                        type="password"
                        value={userPin}
                        onChange={(e) => setUserPin(e.target.value)}
                        placeholder="Enter PIN"
                        className="p-1 border border-gray-300 rounded w-24 mr-2"
                    />
                    <button onClick={addEntry} className="bg-blue-500 text-white px-4 py-1 rounded">Add Entry</button>
                </div> 
                      

                </div>

                <div className='flex justify-center items-center space-x-2 m-3'>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className='bg-white border border-gray-300 rounded-md text-gray-700 h-10 pl-3 pr-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                    >
                        {[...Array(12).keys()].map((month) => {
                            return <option key={month + 1} value={month + 1}>{month + 1}</option>;
                        })}
                    </select>
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className='bg-white border border-gray-300 rounded-md text-gray-700 h-10 pl-3 pr-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                    >
                        {[...Array(10).keys()].map((offset) => {
                            const year = currentYear - offset;
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>
                </div>



            <div>
                {Object.entries(groupedEntries).map(([date, entries]) => (
                    <div key={date} className="mb-4">
                        <ul className="list-none p-0">
                            {entries.map((entry) => (
                                <li key={entry.id} className=" mb-2 pb-2 gap-2">
                                    <h2 className="text-lg font-bold text-center">{formatDate(entry.entry_date)}</h2>
                                    <div className='flex gap-4'>
                                        <button onClick={() => deleteEntry(entry.id)}>•</button>
                                        <button className="text-left" onClick={() => handleEditClick(entry)}>{entry.entry_text}</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            { isModalOpen &&
                <EditEntryModel
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    entry={selectedEntry}
                    onSubmit={updateEntry}
                    pin={userPin}
                    setPin={setUserPin}
                />
            }


            <div className="mb-4">
                    <input
                        type="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder="Enter Password To View Private Entries"
                        className="w-full p-1 border border-gray-300 rounded"
                    />
            </div>
        </div>
    );
    
}

export default Journal;
