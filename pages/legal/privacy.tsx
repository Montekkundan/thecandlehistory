import Head from "next/head";
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Privacy() {
  return (
    <div>
        <Head>
        <title>Privacy | The Candle History</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div>
            <h1>Privacy Policy</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Privacy