import React from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import Footer from "./../../components/footers/SimpleFiveColumn.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;

const FAQContent = tw.div``;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left text-primary-500`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;


// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    heading = "About Us",
}) => {

    return (
        <Container>
            <Content>
                <FAQContent>
                    <Heading>{heading}</Heading>
                    <Description>TicketWize is the ultimate online destination for securing tickets to the hottest concerts and events. We offer a vast selection of tickets for music enthusiasts, dance lovers, sports fanatics, and theater lovers alike. From major music festivals to intimate theater performances, our platform caters to a wide range of tastes and preferences. With our user-friendly interface and comprehensive search options, finding the perfect tickets is quick and easy. Whether you're looking for front-row seats or budget-friendly options, TicketWize is your go-to source for securing the best tickets to make unforgettable memories.</Description>
                    <Description>We prioritize the security and satisfaction of our customers. Our platform is designed to provide a seamless and secure ticket purchasing experience. We partner with reputable ticket sellers and event organizers to ensure that all tickets offered on our website are authentic and valid. Additionally, our advanced encryption technology safeguards your personal and financial information, giving you peace of mind when making transactions. With our flexible ticket options and dedicated customer support team, we strive to provide exceptional customer service throughout your ticket buying journey.</Description>
                    <Description>We go beyond just ticket booking. We are dedicated to enhancing your overall event experience. Our website provides valuable information about the events, including detailed event descriptions, artist profiles, venue information, and seating plans. This empowers you to make informed decisions and ensures that you have all the necessary details at your fingertips. Whether you're a dedicated fan or looking to explore new events, TicketWize is your trusted partner in securing tickets to the best concerts and events around. Join us today and let us help you create unforgettable memories.</Description>
                </FAQContent>
            </Content>
            <Footer />
        </Container>
    );
};
