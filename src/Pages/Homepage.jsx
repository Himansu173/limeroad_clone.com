import { Stack } from "@chakra-ui/react";
import MyFeedHomepage from "../Components/Homepage/MyFeedHomepage";
import CarouselHomepage from "../Components/Homepage/CarouselHomepage";
import ProductsHomepage from "../Components/Homepage/ProductsHomepage";

const Homepage = () => {
  return (
    <Stack align={"center"} bg={"#EEEEEE"} width={"100%"}>
      <MyFeedHomepage />
      <CarouselHomepage />
      <ProductsHomepage />
    </Stack>
  );
};

export default Homepage;
