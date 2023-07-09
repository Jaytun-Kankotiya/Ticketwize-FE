import React from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import Footer from "./../../components/footers/SimpleFiveColumn.js";
import { LogoLink } from "./../headers/light.js";
import logo from "./../../images/logo-hz.png";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const FAQContent = tw.div``;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left text-primary-500`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;


// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  heading = "Event Registration Failed...",
}) => {

  return (
    <Container>
      <NavRow>
        <LogoLink href="/">
          <img style={{ height: 60, width: 309 }} src={logo} alt="" />
        </LogoLink>
      </NavRow>
      <Content>

        <FAQContent>
          <br></br>
          <Heading>{heading}</Heading>
          <Description>Ticket Booking Canceled - Continue to book around and checkout when you're ready.</Description>
          <Description>Sorry for the inconvience...</Description>
          <Description></Description>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </FAQContent>
      </Content>
      <Footer />
    </Container>
  );
};