import React, {useEffect} from "react";
import axios from 'axios';
import * as configData from "./../../config/constants.js";
import tw from "twin.macro";
import { SectionHeading} from "./../misc/Headings.js";
import Footer from "./../../components/footers/SimpleFiveColumn.js";
import { LogoLink } from "./../headers/light.js";
import logo from "./../../images/ticketwize_logo_purple_horizontal.png";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const FAQContent = tw.div``;
const Heading = tw(SectionHeading)`lg:text-left text-primary-500`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;


// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    heading = "Event Registration Successful",
}) => {
  const eventId = JSON.parse(localStorage.getItem('event_id'));
  const email = JSON.parse(localStorage.getItem('email'));

  useEffect(() => {
    axios.get(configData.API_URL + 'api/v1/event/register/success?event_id=' + eventId + '&email=' + email)
        .then(function (response) {
            console.log(response.data.response)
        })
        .catch(function (error) {
            console.log(error);
        });
}, [email, eventId]);
    return (
        <Container>
          <NavRow>
        <LogoLink href="/">
          <img style={{ height: 60, width: 309 }} src={logo} alt="" />
        </LogoLink>
      </NavRow>
            <Content>
                <FAQContent>
                    <Heading>{heading}</Heading>
                    <Description>Thank you for registering your Event Tickets with Ticketwize. You will receive the the confirmation mail of ticket registration. with that mail you will get the cloud link of your virtual event tickets.</Description>
                    <Description></Description>
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

