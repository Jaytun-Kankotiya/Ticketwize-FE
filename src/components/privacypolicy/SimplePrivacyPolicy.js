import React from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import Footer from "./../../components/footers/SimpleFiveColumn.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;

const FAQContent = tw.div``;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left text-primary-500`;
const SubHeading = tw(SectionHeading)`text-xl sm:text-2xl mt-5 lg:text-left text-primary-500`;
const SubTitle = tw(SectionHeading)`text-xl sm:text-xl mt-2 lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;


export default ({
    heading = "Privacy Policy",
}) => {

    return (
        <Container>
            <Content>
                <FAQContent>
                    <Heading>{heading}</Heading>
                    <Description>Ticketwize is an online ticket selling platform and in accordance with signed Agency agreements, offers Event Promoters the ability to sell their event tickets on the internet. A necessary component of such a transaction is the exchange of information between a patron and the www.ticketwize.com website. Various information types are shared, and each has unique privacy considerations outlined below.</Description>

                    <SubHeading>RESTRICTIONS</SubHeading>
                    <Description>There are No Refunds or Exchanges for any ticket purchased to any event hosted on the www.ticketwize.com website</Description>

                    <SubHeading>INFORMATION COLLECTED FROM WEB PATRONS</SubHeading>
                    <SubTitle>Contact Information:</SubTitle>
                    <Description>While placing online orders at www.ticketwize.com you are asked to provide your full name, email address, and phone number.</Description>
                    <SubTitle>Order Entry:</SubTitle>
                    <Description>Placing orders at www.ticketwize.com requires the submission of valid credit card information. Specifically, you must provide the name on the credit card, the credit card number, its expiration date and CSC (3 digit security code on the back of your credit card).</Description>

                    <SubHeading>USE OF COLLECTED INFORMATION</SubHeading>
                    <SubTitle>Personal Information:</SubTitle>
                    <Description>Ticketwize is not contain any personal information, financial transactions, credit card number and cookies.</Description>
                    <SubTitle>Security:</SubTitle>
                    <Description>Ticketwize use only Stripe for financial transaction, Stripe is a suite of APIs powering online payment processing and commerce solutions for internet businesses of all sizes. Protect yourself from fraud and increase authorization rates on every payment using our machine learning and data from millions of businesses.</Description>
                    <Description>By completing this registration form, you consent to Ticketwize using and disclosing the information you submit, as described in the preceding paragraphs.</Description>
                    <Description>If you are under 13 years old, you are restricted from purchasing tickets from www.ticketwize.com and must not provide any information about yourself.</Description>
                    <Description>As a user of this www.ticketwize.com website, you agree that you are subject to this web site's Terms of Use as stated in our Privacy Policy at www.ticketwize.com.</Description>
                </FAQContent>
            </Content>
            <Footer />
        </Container>
    );
};
