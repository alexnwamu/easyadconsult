import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  
    return <> <Head>
<meta name="description" content="Discover a new world of opportunities with our study abroad programs in Georgia. Explore a rich culture, diverse landscape, and affordable tuition fees. Apply now and expand your horizons!" />
  <title>Study Abroad in Georgia - Your Ticket to a World of Possibilities</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
</Head>
  <main className={`w-full min-h-screen`}>
    <Navbar />
    <Component {...pageProps} /> 
    <Footer/>
    </main> </>  
    
    
}
