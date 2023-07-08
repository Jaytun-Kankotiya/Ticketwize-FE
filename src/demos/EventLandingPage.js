import React, { useEffect } from "react";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import Hero from "./../components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "./../components/features/VerticalWithAlternateImageAndText.js";
import Blog from "./../components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "./../components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "./../components/forms/SimpleContactUs.js";
import Footer from "./../components/footers/SimpleFiveColumn.js";
import axios from "axios";
import * as configData from '../config/constants.js';
import ClipLoader from "react-spinners/ClipLoader";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const urlParams = new URLSearchParams(window.location.search);
  const event_id = urlParams.get('event_id');
  useEffect(() => {
    localStorage.setItem('event_id', JSON.stringify(event_id));
  }, [event_id]);
  const [event, setEventDetails] = React.useState(null);
  useEffect(() => {
    axios.get(configData.API_URL + 'api/v1/event/fetch?event_id=' + event_id)
      .then(function (response) {
        setEventDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [event_id]);

  if (event) {
    return (
      <AnimationRevealPage>
        <Hero event={event} />
        <Features event={event} />
        {/* <Blog event={event} /> */}
        {/* <Testimonial event={event} /> */}
        {/* <ContactUsForm event={event} /> */}
        <Footer />
      </AnimationRevealPage>
    );
  } else {
    return (
      <div style={style.viewLoading}>
        <ClipLoader
          color={'rgb(100,21,255)'}
          loading
          cssOverride
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
}

const style = {
  viewLoading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EFF7FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}