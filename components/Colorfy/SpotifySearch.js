
export default function SpotifySearch({ searchTerm, onSearchChange, onSearchSubmit }) {
  
  return (
    <div className="flex justify-center items-center w-4/5">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for a song or artist..."
        className="flex flex-grow p-2 rounded-l-lg border border-r-0 focus:outline-none"
        style={{ minWidth: '0', backgroundColor: '#blue-500', color: 'black'}}  // Adjusted styles for longer search bar with blue background
      />
      <button 
        onClick={onSearchSubmit}
        className="px-6 py-2 bg-melrose text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg"
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}  // Added shadow for a better look
      >
        Search
      </button>
    </div>
  );
};

