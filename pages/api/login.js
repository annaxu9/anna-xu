import { serialize } from 'cookie';
import crypto from 'crypto';


export default function handler(req, res) {
  const state = generateRandomString(16);
  res.setHeader('Set-Cookie', serialize('spotify_auth_state', state, { path: '/' }));

  const scope = 'user-read-private user-read-email'; // Define your scopes
  res.redirect(`https://accounts.spotify.com/authorize?${new URLSearchParams({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    state
  }).toString()}`);
}

function generateRandomString(length) {
  // Generate a random string for state parameter
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}
