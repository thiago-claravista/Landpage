import React from "react";
import Link from "next/link";

import { SectionTitle } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Foto1 from "assets/images/IMG_8278.png";
import Foto2 from "assets/images/IMG_8279.png";

import data from "assets/data/stack";
import StackSectionWrapper from "./stack.style";

const Stack = () => {
  return (
    <>
      <StackSectionWrapper>
        <Box className="Stack-Wrapper">
          <Container>
            <Row>
              <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
                <SectionTitle>
                  <Heading> Currencies we currently accept</Heading>
                  <Text>
                    Every month a new cryptocurrency will be added giving our clients more options to invest and to profit
                </Text>
                </SectionTitle>
              </Col>
            </Row>
            <Row>
              <Col className="md-8 offset-md-2 xs-12">
                <Box className="language-image">
                  {data.stack.map((item, index) => (
                    <Link href={item.url} key={index}>
                      <a>
                        <Image src={item.imageSrc} style={{ width: "100px" }} alt={item.name} />
                      </a>
                    </Link>
                  ))}
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </StackSectionWrapper>
      <StackSectionWrapper id="ourteam">
        <Box className="Stack-Wrapper">
          <Container>
            <Row>
              <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
                <SectionTitle>
                  <Heading> Our Team</Heading>
                </SectionTitle>
              </Col>
            </Row>
            <Row>
              <Col className="md-8 offset-md-2 xs-12">
                <Box className="language-image img-ceo">
                  <Box className="language-image" >
                    <Image src={Foto2} alt="CEO" />
                    <Text className="team-member-name">Jonatas de Paula</Text>
                    <Text >CEO</Text>
                    <Box className="qualifications">
                      <ul>
                        <li>Administrator</li>
                        <li>Personal & Professional Coach</li>
                        <li>Crypto Enthusiast</li>
                      </ul>
                    </Box>
                  </Box>
                  <Box className="language-image" style={{ gap: '20px', flexDirection: 'column' }}>
                    <Image src={Foto1} alt="COO" />
                    <Text className="team-member-name">João Valentim</Text>
                    <Text>COO</Text>
                    <Box className="qualifications">
                      <ul>
                        <li>Accountant</li>
                        <li>Crypto Enthusiast</li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </StackSectionWrapper>
    </>
  );
};

export default Stack;
