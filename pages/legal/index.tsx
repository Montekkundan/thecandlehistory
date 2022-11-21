import Head from "next/head";
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Legal() {
  return (
    <div>
        <Head>
        <title>Legal | The Candle History</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div>
            <h1 className="text-2xl text-black">Legal</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Legal