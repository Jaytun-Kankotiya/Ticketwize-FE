import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import Header, { NavLink, LogoLink, PrimaryLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
const BaseURL = "http://127.0.0.1:8000";
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

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

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  // const params = useSearchParams();
  // const queryParams = queryString.parse(params.search);
  // console.log("46-----", queryParams);
  // eslint-disable-next-line no-undef

  const [event, setEventDetails] = React.useState(null);
  useEffect(() => {
    axios.get(BaseURL + '/api/v1/event/fetch?event_id=f34ccf99-8963-476b-90f5-8d81b6963a4d')
      .then(function (response) {
        setEventDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  const navLinks = [
    // <NavLinks key={1}>
    //   <NavLink href="#">
    //     About
    //   </NavLink>
    //   <NavLink href="#">
    //     Blog
    //   </NavLink>
    //   <NavLink href="#">
    //     Locations
    //   </NavLink>
    //   <NavLink href="#">
    //     Pricing
    //   </NavLink>
    // </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Hire Us
    //   </PrimaryLink>
    // </NavLinks>
  ];
  if (event) {
    return (
      // call the API
      <Container>
        <OpacityOverlay />
        <HeroContainer>

          <Content>
            <Heading>
              {event.response.title}
            </Heading>
            {/* /components/blocks/Form/TwoColContactUsFull */}
            <NavLink  href="/components/blocks/Form/TwoColContactUsFull">
            <PrimaryAction>Reserve Seat</PrimaryAction>
            </NavLink>
          </Content>
        </HeroContainer>
      </Container>
    );
  }
};
