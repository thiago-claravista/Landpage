import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Counter from "reusecore/Counter";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import walletImage from "assets/images/wallet-image.svg";
import SectionParticle from "assets/images/particles/crypto-managment-wallet.svg";

import data from "assets/data/wallet";
import WalletSectionWrapper from "./wallet.style";
import AboutSectionWrapper from '../About/about.style';

const Wallet = () => {
  return (
    <WalletSectionWrapper>
      <Container>
        <img
          src={SectionParticle}
          className="section__particle"
          alt="cryptik"
        />
        <Row>
          <Col className="lg-5 md-4 xs-12">
            <Box className="wallet-image">
              <Image src={walletImage} alt="cryptik wallet image" />
            </Box>
          </Col>
          <Col className="lg-6 offset-lg-1 md-8 xs-12">
            <Box className="wallet-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading> With our App</Heading>
                </SectionBackground>
                <Text style={{fontSize: '20px'}}>
                  You will be able to manage all your funds in a secure and reliable way
                </Text>
              </SectionTitle>
            </Box>
            <AboutSectionWrapper id="about">
              <Box className="about-list">
                  <Text as="span">Deposit</Text>
                  <Text as="span">Make payments</Text>
                  <Text as="span">Load your Card</Text>
                  <Text as="span">Transaction History</Text>
              </Box>
              <Text as="span">Everything just one swipe away</Text>
            </AboutSectionWrapper>
          </Col>
        </Row>
      </Container>
    </WalletSectionWrapper>
  );
};

export default Wallet;
