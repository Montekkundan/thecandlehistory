import Head from "next/head";
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Terms() {
  return (
    <div>
        <Head>
        <title>Terms | The Candle History</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div>
            <h1>Terms</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Terms