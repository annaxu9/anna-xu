const searchSpotify = async(query, token) => {

    try {
      const params = new URLSearchParams({ q: query, type: 'track' });
      const response = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
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

      return tracks
    } catch (error) {
      if (error.message === "Failed to fetch") {
        // Handle 401 Unauthorized error
        alert("Your session either expired or you need to login. Press OK to login.");
        window.location.href = '/api/login';
      } else {
        alert("Something went wrong. Please try again later.")
      }
    }
}

const fetchTrackDetails = async (songId, token) => {
    // Fetching track details
    console.log("The token in fetchTrack ", token)
    const trackResponse = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const trackDetailsData = await trackResponse.json();
    return trackDetailsData
}

const fetchAudioFeatures = async (songId, token) => {
    // Fetching audio features
    console.log("The token in fetchAudio ", token)
    const featuresResponse = await fetch(`https://api.spotify.com/v1/audio-features/${songId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const audioFeaturesData = await featuresResponse.json();
    return audioFeaturesData
}

const fetchArtistsDetails = async (artists, token) => {
    let artistsData = []
    // Fetching artists' genres
    const artistsResponse = await Promise.all(artists.map(async artist => {
        const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artist.id}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const artistData = await artistResponse.json();
        artistsData.push(artistData)
    }));
    return artistsData
}

const getGenres = (artists) => {
  let genres = new Set();
  artists.map((artist) => {
    artist.genres.map((genre) => {
      genres.add(genre)
    })
  })
  return genres
}

export {searchSpotify, fetchTrackDetails, fetchAudioFeatures, fetchArtistsDetails, getGenres}