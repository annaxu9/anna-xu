import '../styles/globals.css'
import NavBar from '../components/NavBar/NavBar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <div className='bg-white h-10'>
      </div> */}
      <NavBar />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
