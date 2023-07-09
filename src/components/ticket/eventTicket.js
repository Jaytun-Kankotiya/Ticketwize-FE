/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AnimationRevealPage from "./../../helpers/AnimationRevealPage";
// import { Container, Content2Xl } from "./components/misc/Layouts";
import { Container, Content2Xl } from "./../misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "./../headers/light.js";
import { SectionDescription as DescriptionBase } from "./../misc/Typography";
import Footer from "./../footers/SimpleFiveColumn.js";
// import heroScreenshotImageSrc from "./images/demo/MainLandingPageHero.png";
import heroScreenshotImageSrc from "./../../images/demo/MainLandingPageHero.png";
import logo from "./../../images/logo-hz.png";
import QRCodeGenerator from './QRCodeGenerator';
import * as configData from "../../config/constants.js";
import axios from 'axios';
import moment from 'moment';
/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const HeadingBase = tw.h3`text-3xl sm:text-4xl font-black tracking-wide text-left`
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-500 leading-snug`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Description = tw(
    DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;
const PrimaryAction = tw.button`text-center lg:text-center rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;



// eslint-disable-next-line import/no-anonymous-default-export
export default function EventTicket() {
    /*
     * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
     * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
     */
    const [eventId, setEventId] =  useState({});
    const [emailId, setEmailId] =  useState([]);
    const [userEventId, setuserEventId] = useState([]);
    const [qrDetials, setQRDetails] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const event_id = urlParams.get('event_id');
    const email = urlParams.get('event_id');
    const user_event_id = urlParams.get('user_event_id');





    useEffect(() => {
        axios.get(configData.API_URL + 'api/v1/user/fetch/tickets?event_id=' + event_id + '&email=' + email + '&user_event_id=' + user_event_id)
            .then(function (response) {
                setQRDetails(response.data);
                setEventId(event_id);
                setEmailId(email);
                setuserEventId(user_event_id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    if(qrDetials){
        console.log("73-----")
        // console.log(qrDetials.response.length)
        const rows = [];
// for (let i = 0; i < qrDetials.response.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    // rows.push(<QRCodeGenerator key={i} />);
// }
    return (

        <AnimationRevealPage disabled>
            <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
                <Content2Xl>
                    <NavRow>
                        <LogoLink href="/">
                            <img style={{ height: 60, width: 309 }} src={logo} alt="" />
                        </LogoLink>
                    </NavRow>
                    <HeroRow>
                        {/* <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <NavLink href="/components/landingPages/EventLandingPage?event_id=c446aab3-fb96-4249-a7b7-af89c300c31c">
                <PrimaryAction>Current Event</PrimaryAction>
              </NavLink>
            </TextColumn> */}
                        {/* for (const payment in qrDetials.response) { */}

                        <TextColumn>
                            <React.StrictMode>
                                <QRCodeGenerator/>
                            </React.StrictMode>,
                        </TextColumn>
                        <ImageColumn>
                            <ImageContainer>
                                <Image src={heroScreenshotImageSrc} />
                            </ImageContainer>
                        </ImageColumn>
                    </HeroRow>
                </Content2Xl>
                <Footer />
            </Container>
        </AnimationRevealPage>
    );
        }
};

// export default EventTicket();