import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useSearchParams } from "react-router-dom";
import queryString from 'query-string';
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import axios from "axios";
const Container = tw.div`relative`;
const BaseURL = "http://127.0.0.1:8000";
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
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
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

// eslint-disable-next-line import/no-anonymous-default-export
export default()=> {
  const params = useSearchParams();
  const queryParams = queryString.parse(params.search);
  console.log("46-----", queryParams);
  // eslint-disable-next-line no-undef
  
  const [event, setEventDetails] = React.useState(null);
  useEffect(() => {
    axios.get(BaseURL+'/api/v1/event/fetch?event_id=f34ccf99-8963-476b-90f5-8d81b6963a4d')
  .then(function (response) {
    console.log(response);
    setEventDetails(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }, [])
  if(event){
  return (
    <Container>
    <SingleColumn>
      <HeadingInfoContainer>
        <HeadingTitle>About Event</HeadingTitle>
        <HeadingDescription>
          Here you can find the event details.
        </HeadingDescription>
      </HeadingInfoContainer>

      <Content>
          <Card>
            <Image imageSrc='https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg' />
            <Details>
              {/* <Subtitle>{card.subtitle}</Subtitle> */}
              {/* <Subtitle>Tiele</Subtitle> */}
              <Title> {event.response.title}</Title>
              <h3><strong>Venue:</strong> {event.response.address.house_no} {event.response.address.street},  {event.response.address.city}, {event.response.address.provision},  {event.response.address.country}, {event.response.address.postal_code}</h3>
              <h3><strong>Date:</strong> {event.response.start_date_time}</h3>
              <Description>{event.response.description}</Description>
              <Description><p><strong>Price:</strong> {event.response.price} buks</p></Description>
              <Description><p><strong>Hurry up! only {event.response.total_seat-event.response.booked_seat} seats remaining from {event.response.total_seat} seats.</strong> </p></Description>
            </Details>
          </Card>
        
      </Content>
    </SingleColumn>
    <SvgDotPattern1 />
    <SvgDotPattern2 />
    <SvgDotPattern3 />
    <SvgDotPattern4 />
  </Container>
      );}
}