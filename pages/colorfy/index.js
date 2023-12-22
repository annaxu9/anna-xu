import React, { useState, useEffect, useRef } from "react";
import SpotifySearch from "../../components/Colorfy/SpotifySearch";
import { AuthProvider } from '../../contexts/AuthContext'
import { useAuth } from "../../contexts/AuthContext";
import SearchResults from "../../components/Colorfy/SearchResults";

export default function Colorfy() {
  const { token, setToken } = useAuth(); // Using useAuth hook

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token); // Determine authentication based on token
  const [newToken, setNewToken] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(true);

  const searchBarRef = useRef(null);

  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      setToken(accessToken);
      setNewToken(accessToken);
      setIsAuthenticated(true);
    }
  }, []);

  async function searchSpotify(query) {
    if (!token) {
      alert("Not authenticated");
      return;
    }

    let updatedToken = token
    if (newToken != "") {
      updatedToken = newToken
    } 
    setToken(updatedToken);

    try {
      const params = new URLSearchParams({ q: query, type: 'track' });
      const response = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${updatedToken}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      const tracks = data.tracks.items.map(track => ({
        name: track.name,
        artist: track.artists.map(artist => artist.name).join(', '),
        id: track.id
      }));

      setResults(tracks);
    } catch (error) {
      alert("An error occurred. Your session expired. Please login again.");
      console.log(error)
      if (error.message === "Failed to fetch") {
        // Handle 401 Unauthorized error
        alert("Press OK to Login again.");
        handleLogin(); // Redirect to login or refresh the token
        return;
      }
    }
  }

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter a search term.");
      return;
    }
    // unfocusSearchBar();
    await searchSpotify(searchTerm);
    setIsSearchFocused(false)
  };

  const unfocusSearchBar = () => {
    searchBarRef.current?.blur();
  };

  return (

    <AuthProvider>
      <div className="p-5 text-center animated_rainbow_1">colorfy</div>
      {!isAuthenticated && <div className="flex justify-center"><button className="mt-10 px-6 py-2 bg-melrose text-white rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={handleLogin}>Login with Spotify</button></div>}
      {isAuthenticated && (
        <div className="relative flex flex-col justify-center items-center">
          <SpotifySearch ref={searchBarRef} searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch} setIsSearchFocused={setIsSearchFocused}/>
          <SearchResults results={results} isSearchFocused={isSearchFocused}/>
        </div>

      )}
    </AuthProvider>
  );
}
