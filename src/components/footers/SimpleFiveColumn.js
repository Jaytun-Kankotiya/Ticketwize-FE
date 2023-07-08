import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo-hz.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import moment from "moment";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-1/3`;
const LogoText = tw.h5`text-xl font-black text-primary-500`;

const CopyrightText = tw.h5`ml-2 text-center pb-10 text-sm`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-4`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CompanyDescription>
            TicketWize is your ultimate destination for concert and event ticket booking. We are passionate about connecting you with unforgettable live experiences and making the ticket buying process convenient, secure, and enjoyable.
          </CompanyDescription>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/">Home</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/components/blocks/About/SimpleAboutUs">About Us</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Contact</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText("+15199914007"); }}>+1 519-991-4007</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="mailto:coreaitech@google.com">coreaitech@google.com</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
      <CopyrightText>© {moment().get('year')} Copyright <strong><Link style={{ color: 'rgb(100,21,255)' }} href="/">TicketWize</Link></strong>. All Rights Reserved</CopyrightText>
    </Container>
  );
};
