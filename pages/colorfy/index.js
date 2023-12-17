import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import SpotifySearch from "../../components/Colorfy/SpotifySearch";
import { AuthProvider } from '../../contexts/AuthContext'
import { useAuth } from "../../contexts/AuthContext";

export default function Colorfy() {
  const { token, setToken } = useAuth(); // Using useAuth hook
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token); // Determine authentication based on token
  const [newToken, setNewToken] = useState('')

  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      console.log('New access token?' + accessToken)
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
    console.log(updatedToken)

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
      alert("An error occurred: " + error.message);
      console.log(error)
      if (error.message === "Failed to fetch") {
        // Handle 401 Unauthorized error
        alert("Session expired. Please login again.");
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
    await searchSpotify(searchTerm);
  };

  const handleSongClick = (trackId) => {
    router.push(`/colorfy/${trackId}`);
  };

  return (

    <AuthProvider>
      <div className="p-5 text-center animated_rainbow_1">colorfy</div>
      {!isAuthenticated && <button onClick={handleLogin}>Login with Spotify</button>}
      {isAuthenticated && (
        <div> 
          <SpotifySearch searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch}/>
          <div id="results">
            {results.map(track => (
              <p key={track.id} onClick={() => handleSongClick(track.id)}>
                {track.name} by {track.artist}
              </p>
            ))}
          </div>
        </div>
      )}
    </AuthProvider>
  );
}
