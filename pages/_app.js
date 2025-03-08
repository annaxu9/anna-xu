import "../styles/globals.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/NavBar/Footer";
import { AuthProvider } from "../contexts/AuthContext";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Analytics />
      <NavBar />
      <div className="mt-24"></div>
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
