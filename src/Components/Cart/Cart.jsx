import Items from "./Items";
import {
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem('cartProduct')) || [])
    setTotalAmount(Number.parseInt(sessionStorage.getItem('totalAmount')))
  }, []);

  return (
    <>
      {data.length !== 0 && <Flex justifyContent={"center"}>
        <Box width={"48vw"} height={"91vh"} overflow={"auto"}>
          {data.map((el) => (
            <Items key={el.id + Math.random()} id={el.id} title={el.title} Quantity={el.Quantity} price={el.price} img={el.image} setTotalAmount={setTotalAmount} setData={setData} />
          ))}
        </Box>
        <Box ml={"10px"} mt={"17px"} width={"40vw"} color={"black"} textAlign={"center"} bg={"white"} pt={7} pl={5} pr={5}>
          <Flex justifyContent={'space-between'}>
            <Flex>
              <img src="	https://img0.junaroad.com/images/icons/coupon_icon_v2.png" alt="img" width={"35px"} />
              <Box>
                <Text fontSize={"0.7rem"} fontWeight={600} ml='4' textAlign={'left'} letterSpacing={1}>
                  APPLY COUPON CODE
                </Text>
                <Text fontSize={"0.75rem"} fontWeight={400} ml='4'>
                  Check For Available Coupons
                </Text>
              </Box>
            </Flex>
            <Button bg={'#d3145a'} height={8} _hover={{}} fontWeight={500}> &#43; ADD </Button>
          </Flex>
          <Flex mt={'30px'} >
            <Box>
              <Text fontSize={"1.2rem"} letterSpacing={1}>
                SUMMARY
              </Text>
            </Box>
          </Flex>
          <Flex mt={'20px'} justifyContent={'space-between'} >
            <Box>
              <Text fontSize={"0.9rem"} color={'gray'}>
                Total Price
              </Text>
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} fontWeight={600}>
                ₹ {totalAmount}
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={'space-between'} >
            <Box>
              <Text fontSize={"0.9rem"} color={'gray'}>
                Shipping Charges
              </Text>
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} fontWeight={600} color={'lightgreen'}>
                FREE
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={'space-between'} >
            <Box>
              <Text fontSize={"0.9rem"} color={'gray'}>
                Handling Charges
              </Text>
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} fontWeight={600}>
                + ₹ 25
              </Text>
            </Box>
          </Flex>
          <Box border={'1px solid lightgray'} mt={3}></Box>
          <Flex justifyContent={'space-between'} mt='3' >
            <Box>
              <Text fontSize={"1.2rem"} fontWeight={600}>
                Amount Payable
              </Text>
            </Box>
            <Box>
              <Text fontSize={"1.2rem"} fontWeight={600}>
                ₹ {totalAmount + 25}
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt='5' >
            <Button bg={'#d3145a'} width={"90%"} height={"55px"} fontSize={'1.4rem'} _hover={{}} fontWeight={600}>BYE NOW</Button>
          </Flex>
        </Box>
      </Flex>}
      {data.length === 0 &&
        <>
          <Text color={'black'} textAlign={'center'} mt={"10px"} >There are no items in your cart.</Text>
          <Link to='/'>
            <Flex justifyContent={'center'}>
              <Button width={"20%"} mt={"30px"} _hover={{}} bg={'#9C3'}>CONTINUE</Button>
            </Flex>
          </Link>
        </>
      }
    </>
  );
};

export default Cart;
