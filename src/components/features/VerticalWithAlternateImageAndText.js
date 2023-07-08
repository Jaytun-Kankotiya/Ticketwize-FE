import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import ReactHtmlParser from 'react-html-parser';
import moment from "moment";

const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Content = tw.div`mt-16`;
const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded sm:w-1/2 md:w-2/3 lg:w-5/12 xl:w-1/2 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const SubTitle = tw.h4`mt-2 text-sm leading-loose`;
const Description = tw.p`mt-2 text-sm leading-loose`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const NavLink = tw.a`
  text-lg lg:text-sm mt-0 font-semibold tracking-wide transition duration-300 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 text-sm sm:text-base sm:mt-8 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  console.log("props", props);
  const event = props.event;
  if (event) {
    return (
      <Container>
        <SingleColumn>
          <HeadingInfoContainer>
            <HeadingTitle>About Event</HeadingTitle>
            <HeadingDescription>
              Here you can see the event details
            </HeadingDescription>
          </HeadingInfoContainer>
          <Content>
            <Card>
              <Image imageSrc={event.response.event_content[0].content} />
              <Details>
                <Title> {event.response.title}</Title>
                <br />
                <h3><strong>Venue:</strong> {event.response.address.house_no} {event.response.address.street},  {event.response.address.city}, {event.response.address.provision},  {event.response.address.country} - {event.response.address.postal_code}</h3>
                <SubTitle style={{ marginTop: 10 }}><strong>Date:</strong> {moment(event.response.start_date_time).format('DD MMMM, YYYY  hh:ss A')}</SubTitle>
                <Description>{ReactHtmlParser(event.response.description)}</Description>
                <Description><p><strong>Price:</strong> ${event.response.price}</p></Description>
                <Description><p><strong>Hurry up! only {event.response.total_seat - event.response.booked_seat} seats remaining from {event.response.total_seat} seats.</strong> </p></Description>
                <NavLink href="/components/blocks/Form/TwoColContactUsFull">
                  <PrimaryAction>Book Ticket</PrimaryAction>
                </NavLink>
              </Details>
            </Card>

          </Content>
        </SingleColumn>
        <SvgDotPattern1 />
        <SvgDotPattern2 />
        <SvgDotPattern3 />
        <SvgDotPattern4 />
      </Container>
    );
  }
}