import React, { useEffect, useState } from "react";

import { SectionTitle } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";

import StackSectionWrapper from "../Stack/stack.style";

const UserCount = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const data = await (await fetch('https://api.onne.vip/users/total')).json();
    setUsers(data?.data || 0);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <StackSectionWrapper>
        <Box className="Stack-Wrapper">
          <Container>
            <Row>
              <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
                <SectionTitle>
                  <Heading>Number of registered users</Heading>
                </SectionTitle>
              </Col>
            </Row>
            <Row>
              <Col className="md-8 offset-md-2 xs-12">
                <Box className="language-image">
                  <Text className="numberUser">{users}</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </StackSectionWrapper>
    </>
  );
}

export default UserCount;