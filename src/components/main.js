import React from "react";
import Head from "next/head";
import FavIcon from "assets/images/fav-icon.png";

const Main = ({
  children,
  title = "Onne",
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Multiple your cryptocurrencies with ONNE! The first Multibinaries crypto asset agency! Earn up to 300% variable 0-3% Daily ROI!" />
        <meta name="theme-color" content="#ec5555" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Main;
