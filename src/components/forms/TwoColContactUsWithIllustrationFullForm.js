import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import axios from 'axios'
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js";
import EmailIllustrationSrc from "./../../images/email-illustration.svg";
import * as configData from "../../config/constants.js"
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 text-gray-700  font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
// const H1 = tw.input`mt-6 first:mt-0 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`
const Select = styled(Input).attrs({ as: "select" })`
${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  subheading = "Reserve Seats",
  heading = <>Please Fill Below Form and <span tw="text-primary-500">Confirm your Seats</span><wbr /> with us.</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Checkout",
  formAction = configData.API_URL+'api/v1/event/register',
  formMethod = "POST",
  textOnLeft = true,
}) => {
  let value = 0;
  const [paymentConfig, setPaymentConfig] = React.useState(null);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [noOfTickets, setnoOfTickets] = React.useState(1);
  useEffect(() => {
    axios.get(configData.API_URL+'api/v1/payment/fetch/payment_config')
  .then(function (response) {
    setPaymentConfig(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }, [])
  if(paymentConfig){
    var additionalCharges = paymentConfig.response.total_additional_charges
  }

  const [eventData, setEventDetails] = React.useState(null);
  useEffect(() => {
    axios.get(configData.API_URL + 'api/v1/event/fetch?event_id=f34ccf99-8963-476b-90f5-8d81b6963a4d')
      .then(function (response) {
        setEventDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  const handleChange = (event) => {
    value = event.target.value;
    setnoOfTickets(value)
    additionalCharges = value*additionalCharges
    setTotalPrice(value*eventData.response.price)
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if(query.get('success')){
      setMessage("Ticket Booked Successfully! You will receive the mail confirmation.")
    }
    if(query.get('canceled')){
      setMessage("Order Canceled - Continue to book around and checkout when you're ready.")
    };
    
  }, []);
  const [payment, setPaymentDetails] = React.useState(null);
  const openInNewTab = (url) => {
    debugger
    
    window.open(url, "_blank", "noreferrer");
  };

  debugger
   const checkout = () => {
    debugger
    const query = new URLSearchParams(window.location.search);
    let data =  {
      event_id: query.get("event_id"),
      no_of_tickets: query.get("event_id"),
      first_name: query.get("event_id"),
      last_name: query.get("event_id"),
      email: query.get("event_id"),
      contact_number: query.get("event_id"),
      dob: query.get("event_id"),
      gender: query.get("event_id")
    }
    console.log(data);
    let stripe_url;
     axios.post(configData.API_URL+'api/v1/event/register', data)
    .then(function (response) {
      console.log(response);
      stripe_url = response.data.response
      setPaymentDetails(response.data.response);

      openInNewTab(response.data.response)
      
    })
    .catch(function (error) {
      console.log(error);
    });
   if(stripe_url === null){
    checkout()
   }

  }
  const Message = ({ message}) => {
    <section>
      <p> {message} </p>
    </section>
  }
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    
    if(payment){
      openInNewTab(payment)
   }
   else if(additionalCharges && eventData){

  return message ? <Message>message = {message}</Message>: (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={checkout}>
              <Input type="email" name="email" placeholder="Your Email Address" required />
              <Input type="text" name="first_name" placeholder="First Name" required />
              <Input type="text" name="last_name" placeholder="Last Name" required />
              <Input type="text" name="phone" placeholder="Contact No" pattern="[1-9]{1}[0-9]{9}" required />

              <Select name="gender" required>
                <option value="">Please Select Geneder…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
                <option value="Prefer not to answer">Perfer not to Answer</option>
              </Select>
              <Input type="date" id="dob" name="dob" required/>
              <Input type="number" name="seatcount" placeholder="No Of Seats" min="1"  onChange={handleChange} required />
              <br />
              <TextContent> Price: {eventData.response.price}$ x {noOfTickets}<br />Service Charge: {paymentConfig.response.service_fee}% x {noOfTickets} <br />Payment Gateway Charge: {paymentConfig.response.payment_fee}% x {noOfTickets} <br />Total Price: {totalPrice+((additionalCharges)*(totalPrice)/100)}$</TextContent>
              {/* <Textarea name="message" placeholder="Your Message Here" /> */}
              <SubmitButton type="submit" onClick={checkout}>{submitButtonText} </SubmitButton>
             
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );}
  else{
    console.log("181------", payment)
    return payment;
  }
};
