
export default function SpotifySearch({ searchTerm, onSearchChange, onSearchSubmit }) {
  
  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for a song..."
      />
      <button onClick={onSearchSubmit}>Search</button>
    </div>
  );
};

