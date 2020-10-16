import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerTwo from 'sections/BannerTwo';
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import UserMap from "sections/UserMap";
import UserCount from "sections/UserCount";
import Wallet from "sections/Wallet";
import Stack from "sections/Stack";
import Faq from "sections/Faq";
import Footer from "sections/Footer";
import Video from 'react-player';

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  const [showPresentation, setShowPresentation] = useState(false);
  const [dimensions, setDimensions] = useState({});
  const [load, setLoad] = useState(false);
  const videoPlayer = useRef();

  const wasReproduced = () =>
    sessionStorage.getItem('showedPresentation') !== 'true';

  const handleAnimationEnd = () => {
    videoPlayer.current?.wrapper.remove();
    document.documentElement.classList.remove('loading');
    sessionStorage.setItem('showedPresentation', true);
    setLoad(true);
  }

  const handleEnded = () => {
    videoPlayer.current?.wrapper.classList.add('ending');
    videoPlayer.current?.wrapper.addEventListener('animationend', handleAnimationEnd);
  }

  const getDimensions = () => ({
    width: window.innerWidth,
    height: window.innerWidth * (9 / 16)
  });

  const handleResize = () => {
    setDimensions(getDimensions());
  }

  useEffect(() => {
    if (!wasReproduced()) {
      document.documentElement.classList.remove('loading');
      setLoad(true);
    }
    setShowPresentation(wasReproduced());
    setDimensions(getDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Cryptik | Next gentrations react next landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>
      {
        showPresentation &&
        <Video
          url="https://streamable.com/i4q3va"
          className="presentation-video"
          ref={videoPlayer}
          playing={true}
          controls={false}
          muted={true}
          width={dimensions.width}
          height={dimensions.height}
          onEnded={handleEnded} />
      }
      <GlobalStyle />
      {
        load && (
          <>
            <Navigation />
            <BannerTwo />
            <Service />
            <CoinFund />
            <About />
            <UserMap />
            <UserCount />
            <Wallet />
            <Faq />
            <Stack />
            <Footer />
          </>
        )
      }
    </ThemeProvider>
  );
};

export default Home;