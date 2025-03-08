import "../styles/globals.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/NavBar/Footer";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NavBar />
      <div className="mt-24"></div>
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
