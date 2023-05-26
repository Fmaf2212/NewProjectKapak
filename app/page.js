'use client'

// import VideoKapak from './components/video/VideoPlanta.mp4'
// import ReactPlayer from 'react-player'
import Image from 'next/image'
import logoKapak from '../public/imgLogo135px-02.png'
import SelectButtonLanguaje from './components/SelectButtonLanguaje'

import TextMainPage from './components/textMainPage'

function Home() {
  return (
    <>
      <main className="video-background">
        {/* <ReactPlayer url={VideoKapak} controls loop/> */}
        <video autoPlay muted loop>
          {/* <source src="./components/video/VideoPlanta.mp4" type="video/mp4"/> */}
          <source src="/VideoPlanta.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 29, 0, .5)",
          }}
        >
          <Image src={logoKapak} alt="logoKapak" width={135} />
          <TextMainPage />
          <SelectButtonLanguaje />
        </div>
      </main>
    </>
  )
}

export default Home;