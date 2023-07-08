import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "../headers/light.js";
import * as configData from '../../config/constants.js';

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SubHeading = styled.h4`
  ${tw`text-xl text-center sm:text-xl lg:text-3xl xl:text-3xl font-black text-gray-100 leading-snug mt-6`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  console.log("props", props);
  const event = props.event;

  if (event) {
    return (
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          <Content>
            <Heading>
              {event.response.title}
            </Heading>
            {event.response.sponser_by &&
              <SubHeading>
                {'Sponsors by ' + event.response.sponser_by}
              </SubHeading>}
            <NavLink href="/components/blocks/Form/TwoColContactUsFull">
              <PrimaryAction>Book Ticket</PrimaryAction>
            </NavLink>
          </Content>
        </HeroContainer>
      </Container>
    );
  }
};
