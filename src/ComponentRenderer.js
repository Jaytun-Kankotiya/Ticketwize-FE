import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "./helpers/AnimationRevealPage.js"

import EventLandingPage from "./demos/EventLandingPage.js";

import EventLandingPageImageSrc from "./images/demo/EventLandingPage.jpeg";

import BackgroundAsImageHero from "./components/hero/BackgroundAsImage.js";
import IllustrationAndVideoHero from "./components/hero/TwoColumnWithVideo.js";
import IllustrationAndInputHero from "./components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "./components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "./components/hero/FullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "./components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "./components/hero/TwoColumnWithPrimaryBackground.js";

import TwoPlansWithDurationSwitcherPricing from "./components/pricing/TwoPlansWithDurationSwitcher.js";
import ThreePlansWithHalfPrimaryBackgroundPricing from "./components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import ThreePlansPricing from "./components/pricing/ThreePlans.js";

import ThreeColWithSideImageFeatures from "./components/features/ThreeColWithSideImage.js";
import TwoColWithButtonFeatures from "./components/features/TwoColWithButton.js";
import ThreeColSimpleFeatures from "./components/features/ThreeColSimple.js";
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from "./components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import TwoColVerticalWithButtonFeatures from "./components/features/TwoColWithTwoFeaturesAndButtons.js";
import TwoColHorizontalWithButtonFeatures from "./components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import WithStepsAndImageFeatures from "./components/features/TwoColWithSteps.js";
import ThreeColumnDashedBorderFeatures from "./components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from "./components/features/ThreeColCenteredStatsPrimaryBackground.js";
import WithStatsAndImageFeatures from "./components/features/TwoColSingleFeatureWithStats.js";
import WithStatsAndImage2Features from "./components/features/TwoColSingleFeatureWithStats2.js";
import VerticalWithAlternateImageAndTextFeatures from "./components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "./components/cards/ThreeColSlider.js";
import TrendingCards from "./components/cards/TwoTrendingPreviewCardsWithImage.js";
import PortfolioCards from "./components/cards/PortfolioTwoCardsWithImage.js";
import TabGridCards from "./components/cards/TabCardGrid.js";
import ProfileThreeColGridCards from "./components/cards/ProfileThreeColGrid.js"
import ThreeColContactDetailsCards from "./components/cards/ThreeColContactDetails.js"

import ThreeColSimpleWithImageBlog from "./components/blogs/ThreeColSimpleWithImage.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "./components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import PopularAndRecentPostsBlog from "./components/blogs/PopularAndRecentBlogPosts.js";
import GridWithFeaturedPostBlog from "./components/blogs/GridWithFeaturedPost.js";

import TwoColumnWithImageTestimonial from "./components/testimonials/TwoColumnWithImage.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "./components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import TwoColumnWithImageAndRatingTestimonial from "./components/testimonials/TwoColumnWithImageAndRating.js";
import ThreeColumnWithProfileImageTestimonial from "./components/testimonials/ThreeColumnWithProfileImage.js";
import SimplePrimaryBackgroundTestimonial from "./components/testimonials/SimplePrimaryBackground.js";

import SimpleAboutUs from "./components/about/SimpleAboutUs";

import SimplePrivacyPolicy from "./components/privacypolicy/SimplePrivacyPolicy";

import SimpleWithSideImageFAQS from "./components/faqs/SimpleWithSideImage.js";
import SingleColFAQS from "./components/faqs/SingleCol.js";
import TwoColumnPrimaryBackgroundFAQS from "./components/faqs/TwoColumnPrimaryBackground.js";

import SimpleContactUsForm from "./components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletterForm from "./components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsForm from "./components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "./components/forms/TwoColContactUsWithIllustrationFullForm.js";

import GetStartedCTA from "./components/cta/GetStarted.js";
import GetStartedLightCTA from "./components/cta/GetStartedLight.js";
import DownloadAppCTA from "./components/cta/DownloadApp.js";

import SimpleFiveColumnFooter from "./components/footers/SimpleFiveColumn.js";
import FiveColumnWithInputFormFooter from "./components/footers/FiveColumnWithInputForm.js";
import FiveColumnWithBackgroundFooter from "./components/footers/FiveColumnWithBackground.js";
import FiveColumnDarkFooter from "./components/footers/FiveColumnDark.js";
import MiniCenteredFooter from "./components/footers/MiniCenteredFooter.js";

import PaymentSuccess from "./components/payment/PaymentSuccess.js"
import PaymentCancle from "./components/payment/PaymentCancle.js"
import eventTicket from './components/ticket/eventTicket.js';
export const components = {
  landingPages: {
    EventLandingPage: {
      component: EventLandingPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/EventLandingPage",
    },

  },

  innerPages: {




  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/components/blocks/Hero/IllustrationAndInput",
        },
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        },
        FeaturesAndTestimonial: {
          name: "With Features And Customer Testimonial",
          component: FeaturesAndTestimonialHero,
          url: "/components/blocks/Hero/FeaturesAndTestimonial",
        },
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
        IllustrationAndPrimaryBackground: {
          name: "Primary Background With Illustration",
          component: IllustrationAndPrimaryBackgroundHero,
          url: "/components/blocks/Hero/IllustrationAndPrimaryBackground",
        },
      }
    },
    Pricing: {
      type: "Pricing Section",
      elements: {
        TwoPlansWithDurationSwitcher: {
          name: "Two Plans With Duration Switcher",
          component: TwoPlansWithDurationSwitcherPricing,
          url: "/components/blocks/Pricing/TwoPlansWithDurationSwitcher",
        },
        ThreePlansWithHalfPrimaryBackground: {
          name: "Three Plans With Primary Background at Top",
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: "/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
        },
        ThreePlans: {
          name: "Simple Three Plans",
          component: ThreePlansPricing,
          url: "/components/blocks/Pricing/ThreePlans",
        },
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        ThreeColWithSideImage: {
          name: "Three Column With Side Image",
          component: ThreeColWithSideImageFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImage",
        },
        TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        ThreeColSimple: {
          name: "Three Column Simple",
          component: ThreeColSimpleFeatures,
          url: "/components/blocks/Features/ThreeColSimple",
        },
        ThreeColWithSideImageWithPrimaryBackground: {
          name: "Three Column With Side Image With Primary Background",
          component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground",
        },
        TwoColHorizontalWithButton: {
          name: "Two Column With Button and Horizonatal Features with Icon",
          component: TwoColHorizontalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColHorizontalWithButton",
        },
        TwoColVerticalWithButton: {
          name: "Two Column With Vertical Features and Button",
          component: TwoColVerticalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColVerticalWithButton",
        },
        WithStepsAndImage: {
          name: "Steps with Image",
          component: WithStepsAndImageFeatures,
          url: "/components/blocks/Features/WithStepsAndImage",
        },
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        },
        ThreeColCenteredStatsPrimaryBackground: {
          name: "Three Column With Centered Stats on Primary Background",
          component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground",
        },
        WithStatsAndImage: {
          name: "Stats With Image",
          component: WithStatsAndImageFeatures,
          url: "/components/blocks/Features/WithStatsAndImage",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/components/blocks/Features/WithStatsAndImage2",
        },
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
        Portfolio: {
          name: "Two Column Portfolio Cards With Images ",
          component: PortfolioCards,
          url: "/components/blocks/Cards/Portfolio",
        },
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/components/blocks/Cards/TabGrid",
        },
        ProfileThreeColGrid: {
          name: "Three Column Grid Cards For Profile",
          component: ProfileThreeColGridCards,
          url: "/components/blocks/Cards/ProfileThreeColGrid",
        },
        ThreeColContactDetails: {
          name: "Three Column Contact Details Cards",
          component: ThreeColContactDetailsCards,
          url: "/components/blocks/Cards/ThreeColContactDetails",
        },
        Trending: {
          name: "Two Trending Preview Cards With Images",
          component: TrendingCards,
          url: "/components/blocks/Cards/Trending",
        },
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        GridWithFeaturedPost: {
          name: "Grid With Featured Post",
          component: GridWithFeaturedPostBlog,
          url: "/components/blocks/Blog/GridWithFeaturedPost",
        },
        PopularAndRecentPosts: {
          name: "Popular And Recent Posts",
          component: PopularAndRecentPostsBlog,
          url: "/components/blocks/Blog/PopularAndRecentPosts",
        },
        ThreeColSimpleWithImage: {
          name: "Simple Three Column With Image",
          component: ThreeColSimpleWithImageBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImage",
        },
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      }
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImage: {
          name: "Two Column With Image",
          component: TwoColumnWithImageTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImage",
        },
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
        TwoColumnWithImageAndRating: {
          name: "Two Column With Image And Rating",
          component: TwoColumnWithImageAndRatingTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndRating",
        },
        ThreeColumnWithProfileImage: {
          name: "Three Column With Profile Image",
          component: ThreeColumnWithProfileImageTestimonial,
          url: "/components/blocks/Testimonial/ThreeColumnWithProfileImage",
        },
        SimplePrimaryBackground: {
          name: "Simple With Primary Background",
          component: SimplePrimaryBackgroundTestimonial,
          url: "/components/blocks/Testimonial/SimplePrimaryBackground",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },
        SingleCol: {
          name: "Single Column",
          component: SingleColFAQS,
          url: "/components/blocks/FAQS/SingleCol",
        },
        TwoColumnPrimaryBackground: {
          name: "Two Column With Primary Background",
          component: TwoColumnPrimaryBackgroundFAQS,
          url: "/components/blocks/FAQS/TwoColumnPrimaryBackground",
        },
      }
    },
    About: {
      type: "About Us Section",
      elements: {
        SimpleAboutUs: {
          name: "Simple About Us Page",
          component: SimpleAboutUs,
          url: "/components/blocks/About/SimpleAboutUs",
        }
      }
    },
    ticket: {
      type: "event Ticekt",
      elements: {
        eventTicket: {
          name: "Event Tickets",
          component: eventTicket,
          url: "/components/blocks/About/eventTicket",
        },
      },
      PrivacyPolicy: {
        type: "Privacy Policy",
        elements: {
          SimplePrivacyPolicy: {
            name: "Simple Privacy Policy Page",
            component: SimplePrivacyPolicy,
            url: "/components/blocks/PrivacyPolicy/SimplePrivacyPolicy",
          }
        }
      },
    },

    Payment: {
      type: "Payment Status",
      elements: {
        PaymentSuccess: {
          name: "Payment Successful",
          component: PaymentSuccess,
          url: "/components/blocks/Payment/PaymentSuccess"
        },
        PaymentCancle: {
          name: "Payment Cancle",
          component: PaymentCancle,
          url: "/components/blocks/Payment/PaymentCancle"
        }
      }
    },
    Form: {
      type: "Forms Section",
      elements: {
        SimpleContactUs: {
          name: "Simple Contact Us",
          component: SimpleContactUsForm,
          url: "/components/blocks/Form/SimpleContactUs",
        },
        SimpleSubscribeNewsletter: {
          name: "Simple Subscribe newsletter",
          component: SimpleSubscribeNewsletterForm,
          url: "/components/blocks/Form/SimpleSubscribeNewsletter",
        },
        TwoColContactUs: {
          name: "Two Column Contact Us",
          component: TwoColContactUsForm,
          url: "/components/blocks/Form/TwoColContactUs",
        },
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        GetStarted: {
          name: "Get Started",
          component: GetStartedCTA,
          url: "/components/blocks/CTA/GetStarted",
        },
        GetStartedLight: {
          name: "Get Started Light",
          component: GetStartedLightCTA,
          url: "/components/blocks/CTA/GetStartedLight",
        },
        DownloadApp: {
          name: "Download App",
          component: DownloadAppCTA,
          url: "/components/blocks/CTA/DownloadApp",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        },
        FiveColumnWithInputForm: {
          name: "Five Column With Input Form",
          component: FiveColumnWithInputFormFooter,
          url: "/components/blocks/Footer/FiveColumnWithInputForm",
        },
        FiveColumnWithBackground: {
          name: "Five Column With background",
          component: FiveColumnWithBackgroundFooter,
          url: "/components/blocks/Footer/FiveColumnWithBackground",
        },
        FiveColumnDark: {
          name: "Five Column Dark",
          component: FiveColumnDarkFooter,
          url: "/components/blocks/Footer/FiveColumnDark",
        },
        MiniCentered: {
          name: "Mini Centered Dark",
          component: MiniCenteredFooter,
          url: "/components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if (type === "blocks" && subtype) {
      console.log("467-----", type)
      console.log("468-----", subtype)
      console.log("469-----", name)
      Component = components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
        <Component />
      </AnimationRevealPage>
    }
    else {
      Component = components[type][name].component
    }
    if (Component)
      return <Component />

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
