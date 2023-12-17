import '../styles/globals.css'
import NavBar from '../components/NavBar/NavBar'
import { AuthProvider } from '../contexts/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NavBar />
      <Component {...pageProps} />     
    </AuthProvider>
  )
}

export default MyApp
