import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SpotifySearch = () => {
    const router = useRouter();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSongClick = (trackId) => {
        router.push(`/colorfy/${trackId}`);
    }

    // Define your functions here (adjusted for Next.js)
    async function searchSpotify(query, setResults) {
        // ... existing code ...
        const accessToken = "BQB8xuFnRZaL5FoQlfqJZW3vdOqWVcOcMz5BGPwLZ0a3mxVOmagt6XXbe9LVeReksPwZgmhDJ6SQ7jUsN7xOYZzZUOpiwcP-V3-_B8JQB9yJc01971riUXS4SXzK3eP6oRqojZnG2Ft2CcNFZnlR-7VBgwbC3TnnEgPueS8HlNeCRDlrvvPROrWa7eTJ18WdUeZ_uI9RG4EWK1M_fYt1mQ";
        if (!accessToken) return;

        try {
            // ... existing fetch logic ...
            // The URLSearchParams utility helps to properly format query parameters
            const params = new URLSearchParams({
                q: query,
                type: 'track'
            });

            // The fetch API call with the query parameters appended to the URL
            const response = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            // Convert the response to JSON
            const data = await response.json();
            const tracks = data.tracks.items.map(track => ({
                name: track.name,
                artist: track.artists.map(artist => artist.name).join(', '),
                id: track.id
            }));

            setResults(tracks);
        } catch (error) {
            console.error('Error searching Spotify', error);
            setResults([]);
        }
    }

    const performSearch = async () => {
        const results = await searchSpotify(query, setResults);
        // The results state will be updated within the searchSpotify function
    }
    


  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song..."
      />
      <button onClick={() => performSearch()}>Search</button>

      {/* Display results */}
      <div id="results">
        {results.map(track => (
          <p key={track.id} onClick={() => handleSongClick(track.id)}>
            {track.name} by {track.artist} and {track.id}
          </p>
        ))}
      </div>

    </div>
  );
};

export default SpotifySearch;