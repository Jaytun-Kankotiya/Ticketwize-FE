import React from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "./../misc/Layouts";
import { SectionDescription } from "./../misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  subheading = "",
  description = "See you soon...",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>Tickets Booked Successfully! You will receive the mail confirmation.</Heading>
          {description && <Description> See you soon...</Description>}
        </HeadingContainer>
        <StatsContainer>
          
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
