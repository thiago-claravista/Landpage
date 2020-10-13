import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Image from "reusecore/Image";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import cryptikFooterLogo from "assets/images/Logo ONNE.svg";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";

const CoinFund = () => {
  const settings = {
    count: 5432560,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  };

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Be a Supporter 
                  </Heading>
                </SectionBackground>
                <Text>
                An Entire ecosystem where you, as a supporter, will be able to experience the multiple benefits of the cryptocurrency market and make profits with it as we grow!
                </Text>
              </SectionTitle>

              
            </Box>
          </Col>
           <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Image src={cryptikFooterLogo} alt="cryptik footer logo" />
            </Box>
          </Col> 
        </Row>
      </Container>
    </CoinFundWrapper>
  );
};

export default CoinFund;
