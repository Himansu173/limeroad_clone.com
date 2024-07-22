import Carousel from "better-react-carousel";
import { Stack, useBreakpointValue } from "@chakra-ui/react";

const CarouselHomepage = () => {
  return (
    <Stack w={useBreakpointValue({ base: "99%", lg: "70%" })} marginY={"20px"} >
      <Carousel hideArrow autoplay={4000} cols={2} rows={1} loop>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1721223223272.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1721125641806.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1721236988277.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1721125466779.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1721125365010.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1721125419320.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1721125641806.jpg?crsl_pos=3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1661924796571.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0"
          />
        </Carousel.Item>
      </Carousel>
    </Stack>
  );
};

export default CarouselHomepage;
