import type { NextPage } from 'next'
import Head from "next/head";
import Scroll from "../components/Scroll";
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Blog | Isaac NSB. Kargbo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Scroll />

    </div>
  )
}

export default Home
