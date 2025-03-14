import React, { useState, useEffect } from "react";
import SpotifySearch from "../../components/Vibe-Check/SpotifySearch";
import { AuthProvider } from '../../contexts/AuthContext'
import { searchSpotify } from "../../utils/spotify";
import SearchResults from "../../components/Vibe-Check/SearchResults";
// import Link from "next/link";
import Head from "next/head";

export default function VibeCheck() {
  const [token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token); // Determine authentication based on token
  const [isSearchFocused, setIsSearchFocused] = useState(true);

  const handleLogin = () => {
    // Set a flag indicating a login process is underway
    window.location.href = '/api/login';
  };
  
  useEffect(() => {
    let accessToken = ''
    try {
      accessToken = localStorage.getItem('spotifyAccessToken');
      setToken(accessToken)
      setIsAuthenticated(true);  
    } catch {
      console.log("No token in storage")
    }

    if (!token) {
      const urlParams = new URLSearchParams(window.location.search);
      accessToken = urlParams.get('access_token');
  
      if (accessToken) {
        // setToken(accessToken);
        localStorage.setItem('spotifyAccessToken', accessToken);
        setToken(accessToken)
        setIsAuthenticated(true);  
      }
    }

  }, [token]);

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter a search term.");
      return;
    }
    const results = await searchSpotify(searchTerm, token);
    if (results && results.length != 0) {
      setResults(results)
      setIsSearchFocused(false)
    } else {
      alert("New Search. Try again!")
      setSearchTerm("")
    }
  };

  return (

    <AuthProvider>
      <Head>
        <title>Vibe Check</title>
      </Head>
      <div className="p-5 text-center animated_rainbow_1">vibe check</div>
      {!isAuthenticated && <div className="flex justify-center"><button className="mt-10 px-6 py-2 bg-melrose text-white rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={handleLogin}>Login with Spotify</button></div>}
      {isAuthenticated && (
        <div className="relative flex flex-col justify-center items-center">
          <SpotifySearch searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch} setIsSearchFocused={setIsSearchFocused}/>
          <SearchResults results={results} isSearchFocused={isSearchFocused}/>
        </div>
      )}
      <div className="text-right mt-4 w-3/4 mx-auto">
        {/* <Link className="bg-melrose text-white" href="/about-vibe-check">About Vibe Check</Link> */}
        <div style={{ height: '500px' }}></div>
      </div>
    </AuthProvider>
  );
}
