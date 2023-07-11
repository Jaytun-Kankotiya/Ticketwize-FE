/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AnimationRevealPage from "./../../helpers/AnimationRevealPage";
import { Container, Content2Xl } from "./../misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "./../headers/light.js";
import Footer from "./../footers/SimpleFiveColumn.js";
import heroScreenshotImageSrc from "./../../images/demo/MainLandingPageHero.png";
import logo from "./../../images/ticketwize_logo_purple_horizontal.png";
import QRCodeGenerator from './QRCodeGenerator';
import * as configData from "../../config/constants.js";
import axios from 'axios';
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;



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