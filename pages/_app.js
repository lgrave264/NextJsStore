import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppWrapper } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return(<>
    <AppWrapper>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </AppWrapper>
  </>)
}

export default MyApp
