import React, { useState, useEffect } from "react";
import SpotifySearch from "../../components/Colorfy/SpotifySearch";
import { AuthProvider } from '../../contexts/AuthContext'
import { useAuth } from "../../contexts/AuthContext";
import { searchSpotify } from "../../utils/spotify";
import SearchResults from "../../components/Colorfy/SearchResults";

export default function Colorfy() {
  const { token, setToken } = useAuth(); // Using useAuth hook

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Determine authentication based on token
  const [isSearchFocused, setIsSearchFocused] = useState(true);

  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      setToken(accessToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter a search term.");
      return;
    }

    const results = [{id: 1, name: "Anna", artist: "Anna"}]
    // const results = await searchSpotify(searchTerm, token);
    console.log(results, results == Array(0))
    if (results && results.length != 0) {
      setResults(results)
      setIsSearchFocused(false)
    } else if (results.length == 0) {
      alert("Bad Search. Try again!")
      setSearchTerm("")
    }else {
      setIsAuthenticated(false)
    }
  };

  return (

    <AuthProvider>
      <div className="p-5 text-center animated_rainbow_1">colorfy</div>
      {!isAuthenticated && <div className="flex justify-center"><button className="mt-10 px-6 py-2 bg-melrose text-white rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={handleLogin}>Login with Spotify</button></div>}
      {isAuthenticated && (
        <div className="relative flex flex-col justify-center items-center">
          <SpotifySearch searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch} setIsSearchFocused={setIsSearchFocused}/>
          <SearchResults results={results} isSearchFocused={isSearchFocused}/>
        </div>

      )}
    </AuthProvider>
  );
}
