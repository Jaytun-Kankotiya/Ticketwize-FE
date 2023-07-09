import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import axios from 'axios';
import moment from 'moment';
import * as Sentry from "@sentry/react";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js";
import EmailIllustrationSrc from "./../../images/email-illustration.svg";
import Footer from "./../../components/footers/SimpleFiveColumn.js";

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
const TextContent = tw.div`lg:py-2 md:text-left`;

const Subheading = tw(SubheadingBase)`text-center text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight`;
const Heading = tw(SectionHeading)`mt-4 text-gray-700 font-black text-left text-xl sm:text-xl lg:text-2xl text-center md:text-left`;
const Heading2 = tw(SectionHeading)`text-gray-700 font-black text-left text-sm sm:text-sm lg:text-sm text-center md:text-left`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-2 px-5 rounded-l py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
// const H1 = tw.input`mt-6 first:mt-0 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`
const Select = styled(Input).attrs({ as: "select" })``;

const NumberInput = styled(Input).attrs({ type: "number" })``;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  description = <>Please fill below form and <span tw="text-primary-500">confirm your seats</span><wbr /> with us.</>,
  submitButtonText = "Buy Now",
  textOnLeft = true,
}) => {
  const [event_id, setEventId] = useState([]);

  useEffect(() => {
    const eventId = JSON.parse(localStorage.getItem('event_id'));
    if (eventId) {
      setEventId(eventId);
    }
  }, []);

  const [paymentConfig, setPaymentConfig] = React.useState(null);
  const [eventData, setEventDetails] = React.useState(null);

  const getPaymentConfig = (eventDataRes) => {
    axios.get(configData.API_URL + 'api/v1/payment/fetch/payment_config')
      .then(function (response) {
        setPaymentConfig(response.data);
        let flat_fee = Number(response?.data?.response?.flat_fee * formData.seatNo);
        setFlatFee(flat_fee);
        let serviceFee = Number((Number(eventDataRes?.response?.price * formData.seatNo) * response.data.response.service_fee / 100)+flat_fee).toFixed(2);

        setServiceFee(serviceFee);
        
        let paymentFee = Number(((Number(eventDataRes?.response?.price * formData.seatNo)) * response.data.response.payment_fee / 100)).toFixed(2);
        setPaymentFee(paymentFee);
        setTotalPayment((Number(eventDataRes?.response?.price * formData.seatNo) + Number(serviceFee) + Number(paymentFee)).toFixed(2));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(configData.API_URL + 'api/v1/event/fetch?event_id=' + event_id)
      .then(function (response) {
        console.log(response.data.response.service_fee);
        console.log(response.data.response);
        setEventDetails(response.data);
        getPaymentConfig(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [event_id]);

  const [message, setMessage] = useState('');

  const [serviceFee, setServiceFee] = useState(0);
  const [paymentFee, setPaymentFee] = useState(0);
  const [flatFee, setFlatFee] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    emailError: "",
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    phone: "",
    phoneError: "",
    gender: "",
    genderError: "",
    seatNo: 1,
    seatNoError: ""
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setMessage("Ticket Booked Successfully! You will receive the mail confirmation.")
    }
    if (query.get('canceled')) {
      setMessage("Order Canceled - Continue to book around and checkout when you're ready.")
    };

  }, []);

  const [payment, setPaymentDetails] = React.useState(null);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // debugger
  const checkout = (e) => {
    e.preventDefault();
    var isError = false;
    let emailError = '', firstNameError = '', lastNameError = '', phoneError = '', genderError = '', seatNoError = '';
    if (!formData.email) {
      isError = true;
      emailError = 'Enter your email';
    } else {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(formData.email)) {
        isError = true;
        emailError = 'Please enter valid email';
      }
    }
    if (!formData.firstName) {
      isError = true;
      firstNameError = 'Enter your first name';
    }
    if (!formData.lastName) {
      isError = true;
      lastNameError = 'Enter your last name';
    }
    if (!formData.phone) {
      isError = true;
      phoneError = 'Enter your contact no.';
    } else {
      if (formData.phone.length < 10) {
        isError = true;
        phoneError = 'Enter valid 10-digit number (exclude spaces or special characters)';
      }
    }
    if (!formData.gender) {
      isError = true;
      genderError = 'Select your gender';
    }
    if (!formData.seatNo || Number(formData.seatNo) < 1) {
      isError = true;
      seatNoError = 'Enter no of seats';
    }
    if (!isError) {
      let data = {
        event_id: event_id,
        no_of_tickets: formData.seatNo,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        contact_number: "+1" + formData.phone,
        dob: null,
        gender: formData.gender
      }
      let stripe_url;
      axios.post(configData.API_URL + 'api/v1/event/register', data)
        .then(function (response) {
          if (response.status >= 200 && response.status < 300) {
            console.log(response);
            stripe_url = response.data.response
            setPaymentDetails(response.data.response);
            openInNewTab(response.data.response)

            // if (stripe_url === null) {
            //   checkout(e);
            // }
          } else {
            console.log(JSON.stringify(response));
            Sentry.captureException("Fill_Form_Error_" + response.status);
            alert("Something went wrong! Please try again.");
          }
        })
        .catch(function (error) {
          console.log(error);
          Sentry.captureException("Fill_Form_Error_" + error.message);
          alert("Something went wrong! Please try again.");
        });
    } else {
      setFormData({
        ...formData,
        emailError,
        firstNameError,
        lastNameError,
        phoneError,
        genderError,
        seatNoError
      });
    }
  }

  const onChangeTextValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log("e.target.==");
    console.log(e.target);
    if (name == 'seatNo') {

      let flat_fee = Number(paymentConfig.response.flat_fee * value);
      setFlatFee(flat_fee)
      value = Math.max(0, Math.min(Number(eventData.response.total_seat - eventData.response.booked_seat), Number(value)));
      let serviceFee = Number((Number(eventData.response.price * value) * paymentConfig.response.service_fee / 100)+flat_fee).toFixed(2);
      // if (value > 0) {
      //   serviceFee = (Number(serviceFee) + Number(value * paymentConfig.response.total_additional_charges)).toFixed(2);
      // }
      
      setServiceFee(serviceFee);
      let paymentFee = Number(((Number(eventData.response.price * value)) * paymentConfig.response.payment_fee / 100)).toFixed(2);
      setPaymentFee(paymentFee);
      setTotalPayment((Number(eventData.response.price * value) + Number(serviceFee) + Number(paymentFee)).toFixed(2));
    }

    setFormData({
      ...formData,
      [name]: value,
      [name + 'Error']: ''
    });

  }

  const Message = ({ message }) => {
    <section>
      <p> {message} </p>
    </section>
  }
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  // console.log(eventData.response);
  if (payment) {
    // openInNewTab(payment)
  }
  else if (paymentConfig?.response?.total_additional_charges && eventData) {

    return message ? <Message>message = {message}</Message> : (
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{eventData.response.title}</Subheading>
            <Heading>{moment(eventData.response.start_date_time).format('DD MMMM, YYYY')}</Heading>
            <Heading2>{moment(eventData.response.start_date_time).format('hh:ss A')}</Heading2>
            {description && <Description>{description}</Description>}
            <Form>

              <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={onChangeTextValue} maxLength={64} />
              {formData.emailError && <small style={{ textAlign: 'left', marginTop: 5, color: 'red' }}>{formData.emailError}</small>}

              <Input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={onChangeTextValue} maxLength={64} />
              {formData.firstNameError && <small style={{ textAlign: 'left', marginTop: 5, color: 'red' }}>{formData.firstNameError}</small>}

              <Input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={onChangeTextValue} maxLength={64} />
              {formData.lastNameError && <small style={{ textAlign: 'left', marginTop: 5, color: 'red' }}>{formData.lastNameError}</small>}

              <Input type="number" name="phone" placeholder="Contact No." value={formData.phone} onChange={onChangeTextValue} onInput={(e) => e.target.value = e.target.value.slice(0, 10)} maxLength={10} />
              {formData.phoneError && <small style={{ textAlign: 'left', marginTop: 5, color: 'red' }}>{formData.phoneError}</small>}

              <Select name="gender" tabIndex="-98" value={formData.gender} onChange={onChangeTextValue}>
                <option key={0} value="">Select Gender</option>
                <option key={1} value="M">Male</option>
                <option key={2} value="F">Female</option>
                <option key={3} value="O">Other</option>
                <option key={4} value="N">Prefer not to Answer</option>
              </Select>
              {formData.genderError && <small style={{ textAlign: 'left', marginTop: 5, color: 'red' }}>{formData.genderError}</small>}
              {/* we will add later for multi-day event  */}
              {/* <Input type="date" id="dob" name="dob"  />  */}
              <Input type="number" name="seatNo" value={formData.seatNo} step={1} placeholder="No of seats" min={0} max={eventData.response.total_seat - eventData.response.booked_seat} onInput={(e) => e.target.value = e.target.value.slice(0, 4)} onChange={onChangeTextValue} />
              {formData.seatNoError && <small style={{ textAlign: 'left', marginTop: 5, color: 'red' }}>{formData.seatNoError}</small>}
              <br />
              <br />
              {/* <TextContent> Price: {eventData.response.price}$ x {noOfTickets}<br />Service Charge: {paymentConfig.response.service_fee}% x {noOfTickets} <br />Payment Gateway Charge: {paymentConfig.response.payment_fee}% x {noOfTickets} <br />Total Price: {totalPrice + ((paymentConfig?.response?.total_additional_charges) * (totalPrice) / 100)}$</TextContent> */}
              <TextContent> Ticket Price:  <span style={{ fontWeight: 'bold' }}>${eventData.response.price} x {formData.seatNo > 0 ? formData.seatNo : "0"}</span></TextContent>
              <TextContent> Service Charge: <span style={{ fontWeight: 'bold' }}>{formData.seatNo > 0 ? `$${serviceFee}` : "$0"}</span></TextContent>
              <TextContent> Processing Charge: <span style={{ fontWeight: 'bold' }}>{formData.seatNo > 0 ? `$${paymentFee}` : "$0"}</span></TextContent>
              {/* <TextContent> Flat Fee: <span style={{ fontWeight: 'bold' }}>{formData.seatNo > 0 ? `$${flatFee}` : "$0"}</span></TextContent> */}
              <div style={{ height: 1, width: '100%', backgroundColor: 'rgb(226, 232, 240)', marginTop: 10, marginBottom: 10 }}></div>
              <TextContent> Total Amount:  <span style={{ fontWeight: 'bold' }}>${totalPayment}</span></TextContent>
              {/* <Textarea name="message" placeholder="Your Message Here" /> */}
              <SubmitButton type="submit" onClick={checkout}>{submitButtonText} </SubmitButton>

            </Form>
          </TextColumn>
        </TwoColumn>
        <Footer />
      </Container>
    );
  }
  else {
    return payment;
  }
};
