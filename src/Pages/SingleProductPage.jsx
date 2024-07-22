import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { BsSuitHeart, BsSuitHeartFill, BsWhatsapp } from 'react-icons/bs'

function SingleProductPage() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const addToCart = (data) => {
    sessionStorage.setItem('totalAmount', (Number.parseInt(sessionStorage.getItem('totalAmount')) || 0) + data.price);
    sessionStorage.setItem('cartProduct', JSON.stringify([...JSON.parse(sessionStorage.getItem('cartProduct')) || [], data]))
    navigate('/cart');
  }

  async function getdata() {
    let res = await fetch(`http://localhost:3000/productDetails?id=${params.id}`);
    setData(...await res.json());
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true);
    getdata();
  }, []);

  if (loading) {
    return (<div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />;
    </div>)
  }

  return (
    <>
      <Card
        width="80%"
        margin="auto"
        height="90vh"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        backgroundColor={"white"}
        color={"black"}
        overflowY={'auto'}
      >
        <Image
          maxW={{ base: "100%", sm: "511px" }}
          src={data.image}
          alt="Caffe Latte"
        />
        <div style={{ marginLeft: "211px" }}></div>

        <Stack>
          <CardBody>
            <Heading size="lg">{data.title}</Heading>
            <Box textAlign="left" pb={11}>
              <Text py="3" textAlign="left" fontSize="1.2rem">
                {data.brand}
              </Text>
              <Text fontSize="1.5rem" mb="1.2rem">
                4 ⭐⭐⭐⭐
              </Text>
              <BsWhatsapp size={35} color="#9C3" />
              <Text fontSize="1.2rem" my={21}>
                select size
              </Text>
              <Box>
                {data.size &&
                  data.size.map((el) => (
                    <Button key={el} ml="11px" _hover={{ backgroundColor: "#9C3", borderColor: "#9C3" }} borderRadius={"12px"} backgroundColor={"transparent"} border={"1px solid "} color={"black"}>
                      {el}
                    </Button>
                  ))}
              </Box>

              <Text mt="21" fontSize="1.3rem">
                M.R.P.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {":"}
                <del> {data.before_disc} </del>
              </Text>
              <Text color={"green"} mt="2" fontSize="1.5rem">
                {"Price"}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {":"}
                {data.price}
              </Text>
              <Text mt="2" fontSize="1.2rem">
                You Save
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {":"} {data.offer_percent}
              </Text>
            </Box>
          </CardBody>

          <CardFooter>
            <Button variant="solid" bg={'#9C3'} _hover={{}} mr="2" p={25} onClick={() => setLike(!like)} color={"white"}>
              {
                like ? <BsSuitHeartFill size={40} /> : <BsSuitHeart size={40} />
              }
            </Button>
            <Box
              pl="0px"
              textAlign="left"
              w="111%"
            >
              <Button
                onClick={() => addToCart(data)}
                variant="solid"
                width="81%"
                bg={'#9C3'}
                p={25}
                color={"white"}
                _hover={{}}
              >
                ADD TO CART
              </Button>
            </Box>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
export default SingleProductPage;
