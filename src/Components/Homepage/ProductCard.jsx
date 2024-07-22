import { Avatar, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function ProductCard({ id, title, img, userImg, user, followers, fs10, whatsappLink }) {
    const [like, setLike] = useState(false);

    return (
        <Stack align={"flex-start"} bg={"white"} p={"12px"} key={id} color={"black"}>
            <Text pl={"7px"} fontSize={"19px"}>
                {title}
            </Text>

            <Link to="/products">
                <img
                    style={{
                        cursor: "pointer",
                    }}
                    src={img}
                    alt=""
                />
            </Link>

            <Stack pl={"5px"} direction={"row"}>
                <Stack align={"center"}>
                    <Avatar size={"xs"} src={userImg} />
                </Stack>

                <Stack fontWeight={"500"} lineHeight={"10px"}>
                    <Stack direction={"row"}>
                        <Text fontSize={"13px"} opacity={"70%"}>
                            By
                        </Text>
                        <Text fontSize={"15px"}>{user}</Text>
                    </Stack>
                    <Text fontSize={"13px"} opacity={"70%"}>
                        {followers} Followers
                    </Text>
                </Stack>
                <Stack position={"relative"} bottom="40px" direction={"row"}>
                    <Stack align={"center"}>
                        <Stack
                            onClick={() => setLike(!like)}
                            _hover={{
                                cursor: "pointer",
                            }}
                            bg={"white"}
                            w={"50px"}
                            h={"50px"}
                            borderRadius={"50%"}
                            boxShadow={"2px 1px 5px 1px"}
                            align="center"
                            justify={"center"}
                        >
                            {like ? <BsSuitHeartFill color="#D3145A" fontSize={"32px"} /> : <BsSuitHeart color="#D3145A" fontSize={"32px"} />
                            }
                        </Stack>
                        <Text fontWeight={"500"} fontSize={"11px"}>
                            {fs10} Likes
                        </Text>
                    </Stack>
                    <Stack>
                        <Stack align={"center"}>
                            <Stack
                                onClick={() => window.open(whatsappLink)}
                                align="center"
                                justify={"center"}
                                _hover={{
                                    cursor: "pointer",
                                }}
                                w={"50px"}
                                bg={"white"}
                                boxShadow={"2px 1px 5px 1px"}
                                h={"50px"}
                                borderRadius={"50%"}
                            >
                                <BsWhatsapp fontSize={"32px"} color={"#9FDA65"} />
                            </Stack>
                            <Text fontWeight={"500"} fontSize={"11px"}>
                                Share
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProductCard

ProductCard.propTypes = {
    id: PropTypes.any,
    title: PropTypes.string,
    img: PropTypes.string,
    userImg: PropTypes.string,
    user: PropTypes.string,
    followers: PropTypes.string,
    whatsappLink: PropTypes.string,
    fs10: PropTypes.number,
}