import '../styles/globals.css'
import NavBar2 from '../components/NavBar/NavBar2'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
      <AuthProvider>
        <NavBar2 />
        <div className="mt-24"></div>
        <Component {...pageProps}/>     
      </AuthProvider>

  )
}

export default MyApp
