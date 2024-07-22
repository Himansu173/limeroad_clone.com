import React from "react";
import { useState } from "react";
import {
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductsHomepage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:3000/products");
      setData(await res.json())
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <SimpleGrid
      pt={"10px"}
      w={useBreakpointValue({ base: "100%", lg: "90%" })}
      gap={"15px"}
      columns={{ base: 1, sm: 2, lg: 4 }}
    >
      {data?.map((el) => (
        <ProductCard key={el.id} id={el.id} title={el.title} img={el.img} userImg={el.userImg} user={el.user} followers={el.followers} fs10={el.fs10} whatsappLink={el.whatsappLink} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsHomepage;
