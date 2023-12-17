import { parse } from 'cookie';

export default async function handler(req, res) {
    const code = req.query.code || null;
    const state = req.query.state || null; 

    const { spotify_auth_state } = parse(req.headers.cookie || '');

    if (!state || state !== spotify_auth_state) {
        return res.status(400).json({ error: 'state_mismatch' });
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        grant_type: 'authorization_code'
      })
    });
  
    const data = await response.json();
    // Store and use the access token securely
    // Redirect back to your application page
    if (response.ok) {
        // Redirect with tokens or send them directly
        // (you may want to adjust this part based on your front-end needs)
        res.redirect(`/colorfy?access_token=${data.access_token}`);
      } else {
        res.status(400).json({ error: 'invalid_token' });
      }
  }
  