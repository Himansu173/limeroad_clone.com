import { Box, Button, Card, CardBody, Flex, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types'


const Items = ({ id, title, price, Quantity, img, setTotalAmount, setData }) => {

  const handelRemove = (id, price, qty) => {
    let cardProd = JSON.parse(sessionStorage.getItem('cartProduct'));
    let removedCardProd = cardProd.filter((ele) => {
      return ele.id != id;
    })
    sessionStorage.setItem('cartProduct', JSON.stringify(removedCardProd));

    sessionStorage.setItem('totalAmount', Number.parseInt(sessionStorage.getItem('totalAmount')) - (qty * price))
    setTotalAmount(Number.parseInt(sessionStorage.getItem('totalAmount')))
    setData(JSON.parse(sessionStorage.getItem('cartProduct')) || [])
  }

  const handelQty = (id, x, price) => {
    if (Quantity + x != 0) {
      let cardProd = JSON.parse(sessionStorage.getItem('cartProduct'));
      let ModifiedCardProd = cardProd.map((ele) => {
        if (ele.id == id) {
          ele.Quantity = ele.Quantity + x;
        }
        return ele;
      })
      sessionStorage.setItem('cartProduct', JSON.stringify(ModifiedCardProd));
      sessionStorage.setItem('totalAmount', Number.parseInt(sessionStorage.getItem('totalAmount')) + (x * price))
      setTotalAmount(Number.parseInt(sessionStorage.getItem('totalAmount')))
      setData(JSON.parse(sessionStorage.getItem('cartProduct')) || [])
    }
  }

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        borderRadius={"0"}
        bg={"white"}
        mt={"17px"}
        height={"32vh"}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={img}
          alt='Caffe Latte'
        />

        <Stack width={"100%"}>
          <Card color={"black"} bg={"white"} boxShadow={"none"} >
            <CardBody paddingTop={"0"}>
              <Stack divider={<StackDivider />} spacing='1' borderColor={"lightgray"}>
                <Box height={"3vh"} mb={"5px"} pl='1' width={"100%"} display={"flex"} justifyContent={"space-between"}>
                  <Text pt='2' fontSize='sm'>
                    ₹{price} <del style={{ color: "gray", fontSize: "0.8rem" }}>₹{price + 198}</del>
                  </Text>
                  <Text bg={"black"} color={"white"} borderRadius={"50%"} p={1} display={"flex"} alignItems={"center"} fontSize={"0.8rem"} _hover={{ cursor: "pointer" }}
                    onClick={() => handelRemove(id, price, Quantity)}> &#10005;</Text>
                </Box>
                <Box height={"8vh"} mb={"5px"} pl='1'>
                  <Text fontSize='sm'>
                    {title}
                  </Text>
                  <Text fontSize='0.8rem' color={"gray"}>
                    BY CONCEPTS DESIGNS
                  </Text>
                  <Text fontSize='0.75rem' display={"flex"} color={"gray"} >
                    <img src="	https://img1.junaroad.com//assets/images/mobileNotif/img-1704372277409.jpg" alt="img" width={"20px"} />In 187 carts
                  </Text>
                </Box>
                <Box display={"flex"} fontSize={"0.85rem"} mt='2' flexWrap={"wrap"} >
                  Qty:
                  <Button color={"black"} height={"6"} border={"1px solid lightgray"} ml={3} fontWeight={300} onClick={() => handelQty(id, -1, price)}>&#8722;</Button>

                  <Button color={"black"} height={"6"} fontWeight={300}>{Quantity}</Button>

                  <Button color={"black"} fontWeight={300} height={"6"} border={"1px solid lightgray"} onClick={() => handelQty(id, 1, price)}>&#43;</Button>

                  <Text width={"100%"} mt='1' fontSize={"0.85rem"} color={"gray"}>Size: XL</Text>
                </Box>
              </Stack>
              <Flex width={"100%"} justifyContent={"center"}>
                <Button color={"gray"} fontSize={"0.8rem"} fontWeight={"500"} height={8} border={"1px solid lightgray"}>MOVE TO WISHLIST</Button>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
      </Card>
    </>
  );
};

export default Items;

Items.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.any,
  Quantity: PropTypes.any,
  setTotalAmount: PropTypes.func,
  setData: PropTypes.func,
}