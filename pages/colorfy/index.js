import { useState } from "react";
import SpotifySearch from "../../components/Colorfy/SpotifySearch";

export default function Music() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);


  const handleSearch = async () => {
    // Assuming searchSpotify is a function in SpotifySearch that fetches the results
    // You will need to either export it from SpotifySearch or move it to a common utilities file
    const searchResults = await searchSpotify(searchTerm, setResults);
    setResults(searchResults);
  };

  return (
    <div>
        <div className="p-5 text-center animated_rainbow_1">colorfy</div>
      <SpotifySearch results={results} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch} />
      {/* Rest of your homepage content */}
    </div>
  );
  }