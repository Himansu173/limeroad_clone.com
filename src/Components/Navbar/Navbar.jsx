import "./Navbar.css";
import Logo from '../../assets/Limeroad_name.png'
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <Link to="/" style={{ marginRight: "17px" }}>
                                <img src={Logo} alt="LimeRoad" width={"110px"} />
                            </Link>
                            <li className="hover-effect">
                                <Link to="/products">
                                    WOMEN
                                </Link>
                                <div className="mega-menu">
                                    <div className="mega-menu-items">
                                        <h4><span>Top Wears</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Kurta Kurtis",
                                                    "Sarees",
                                                    "Ethnic Sets",
                                                    "Suits & Dress Materials",
                                                    "Lehengas",
                                                    "Blouses",
                                                    "Dupattas",
                                                    "Ethnic Dresses",
                                                    "Palazzos & Skirts",
                                                    "Leggings, Salwar & Churidaar",
                                                    "Shawls & Wraps",
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Western Wear</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Tops",
                                                    "Dresses",
                                                    "Tees",
                                                    "Shirts",
                                                    "Tunics",
                                                    "Jumpsuits",
                                                    "Co Ords",
                                                    "Kaftans",
                                                    "Jeans & Jeggings",
                                                    "Trousers & Pants",
                                                    "Skirts & Shorts"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Lingerie & Sleepwear</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Bra",
                                                    "Panties",
                                                    "Lingerie Sets ",
                                                    "Sleepwear & Loungewear",
                                                    "Shape Wear",
                                                    "Camisoles & THermals"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Brands</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "W",
                                                    "Karigari",
                                                    "Aurelia",
                                                    "Alcis",
                                                    "Shaily",
                                                    "Cottinfab ",
                                                    "Ksut",
                                                    "OXolloxo",
                                                    "Trendif",
                                                    "Pluss"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Sports & Activewear</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Swim Wear",
                                                    "Topwear",
                                                    "Bottomwear",
                                                    "Shoes"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Bottom Wear</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">Jeans</a>
                                            </li>
                                            <li>
                                                <a href="#">Casual Trousers</a>
                                            </li>
                                            <li>
                                                <a href="#">Formal Trousers</a>
                                            </li>
                                            <li>
                                                <a href="#">Campus Sutra</a>
                                            </li>
                                            <li>
                                                <a href="#">Joggers</a>
                                            </li>
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-items">
                                        <h4><span>Sports Wear</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">T-Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>
                                            <li>
                                                <a href="#">Formal Trousers</a>
                                            </li>
                                            <li>
                                                <a href="#">Track Pants</a>
                                            </li>
                                            <li>
                                                <a href="#">Track Suits</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-items">
                                        <h4><span>Beauty & Personal Care</span></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="hover-effect">
                                <Link to="/products">
                                    MEN
                                </Link>
                                <div className="mega-menu">
                                    <div className="mega-menu-items">
                                        <h4><span>Top Wears</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">T-Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Polo T Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Casual Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Formal Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Suits & Blazers</a>
                                            </li>
                                            <li>
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="#">Sweaters & Sweatshirts</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Ethnic Wear</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">Kurtas</a>
                                            </li>
                                            <li>
                                                <a href="#">Ethnic Wear Sets</a>
                                            </li>
                                            <li>
                                                <a href="#">Nehru Jackets</a>
                                            </li>
                                            <li>
                                                <a href="#">Ethnic Bottom Wear</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Footwear</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">Casual Shoes</a>
                                            </li>
                                            <li>
                                                <a href="#">Sports Shoes</a>
                                            </li>
                                            <li>
                                                <a href="#">Casual Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Formal Shoes</a>
                                            </li>
                                            <li>
                                                <a href="#">Jutis And Mojaris</a>
                                            </li>
                                            <li>
                                                <a href="#">Slippers & Sandals</a>
                                            </li>
                                            <li>
                                                <a href="#">Socks</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Accessories</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">Caps And Hats</a>
                                            </li>
                                            <li>
                                                <a href="#">Lapel Pins & Brooch</a>
                                            </li>
                                            <li>
                                                <a href="#">Ties & Pocket Squares</a>
                                            </li>
                                            <li>
                                                <a href="#">Cufflinks & Bracelets</a>
                                            </li>
                                            <li>
                                                <a href="#">Suits & Blazers</a>
                                            </li>
                                            <li>
                                                <a href="#">Handkerchiefs</a>
                                            </li>
                                            <li>
                                                <a href="#">Headphones & Speakers</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Brands</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">Arrow</a>
                                            </li>
                                            <li>
                                                <a href="#">US Polo Assn</a>
                                            </li>
                                            <li>
                                                <a href="#">Aeropostale</a>
                                            </li>
                                            <li>
                                                <a href="#">Campus Sutra</a>
                                            </li>
                                            <li>
                                                <a href="#">Ruggers</a>
                                            </li>
                                            <li>
                                                <a href="#">Canary London</a>
                                            </li>
                                            <li>
                                                <a href="#">Hang Up</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-items">
                                        <h4><span>Bottom Wear</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">Jeans</a>
                                            </li>
                                            <li>
                                                <a href="#">Casual Trousers</a>
                                            </li>
                                            <li>
                                                <a href="#">Formal Trousers</a>
                                            </li>
                                            <li>
                                                <a href="#">Campus Sutra</a>
                                            </li>
                                            <li>
                                                <a href="#">Joggers</a>
                                            </li>
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-items">
                                        <h4><span>Sports Wear</span></h4>
                                        <ul>
                                            <li>
                                                <a href="#">T-Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>
                                            <li>
                                                <a href="#">Formal Trousers</a>
                                            </li>
                                            <li>
                                                <a href="#">Track Pants</a>
                                            </li>
                                            <li>
                                                <a href="#">Track Suits</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-items">
                                        <h4><span>Personal Grooming</span></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="hover-effect">
                                <Link to="/products">
                                    KIDS
                                </Link>
                                <div className="mega-menu">
                                    <div className="mega-menu-items">
                                        <h4><span>Boys</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "T-Shirts",
                                                    "Shirts",
                                                    "Bottom Wear",
                                                    "Ethnic Wear",
                                                    "Sweater & Cardigans",
                                                    "Coats & Jackets",
                                                    "Innerwear & Nightwear",
                                                    "Twin Sets & Dungrees"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Girls</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Dresses & Frocks",
                                                    "Tees & Tops",
                                                    "Bottom Wear ",
                                                    "Ethnic Wear",
                                                    "Sweater & Cardigans ",
                                                    "COats & Jackets",
                                                    "Twin Sets & Jump Suits",
                                                    "Innerwear & Nightwear"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Footwear</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Sandals & Floaters",
                                                    "Slippers & Flip Flops",
                                                    "Casual Shoes",
                                                    "Sports Shoes",
                                                    "Formal Shoes"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Brands</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Giny & Jony",
                                                    "US Polo Assn Kids",
                                                    "Monte Carlo",
                                                    "Cherokee",
                                                    "Li'l Tomatoes",
                                                    "NeuVin",
                                                    "Under Fourteen Only",
                                                    "Tales & Stories",
                                                    "Beebay"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Shop By Age (Boys)</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "0-2 Years",
                                                    "2-6 Years",
                                                    "6-12 Years",
                                                    "12-16 Years"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Shop By Age (Girls)</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "0-2 Years",
                                                    "2-6 Years",
                                                    "6-12 Years",
                                                    "12-16 Years"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="hover-effect">
                                <Link to="/products">
                                    HOME
                                </Link>
                                <div className="mega-menu">
                                    <div className="mega-menu-items">
                                        <h4><span>Bed Linen & Furnishing</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Bed Sheet Sets",
                                                    "Quilts & Comforters",
                                                    "Blankets",
                                                    "Bed Covers",
                                                    "Pillow Covers",
                                                    "Curtains"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Bath</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Towels",
                                                    "Bath Mats",
                                                    "Shower Curtains"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Household Accessories</span></h4>
                                    </div>

                                    <div className="mega-menu-items">
                                        <h4><span>Brands</span></h4>
                                        <ul>
                                            {
                                                [
                                                    "Bella Casa",
                                                    "Cortina"
                                                ].map((ele) => (
                                                    <li key={ele}>
                                                        <a href="#">{ele}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="hover-effect">
                                <a style={{ color: "#d91f07", fontWeigth: "bold" }} href="#">
                                    OFFERS
                                </a>
                            </li>
                            <li className="hover-effect">
                                <a style={{ color: "#d91f07", fontWeigth: "bold" }} href="#">
                                    VMART
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-item item-right">
                        <div className="icon-box">
                            <span className="icon-div" style={{ color: "black" }}>
                                <BsFillPencilFill className="header-icon" />
                                <p className="icon-name">SCRAPBOOKS</p>
                            </span>

                            <span className="icon-div" style={{ color: "black" }}>
                                <AiOutlineSearch className="header-icon" />
                                <p className="icon-name">SEARCH</p>
                            </span>

                            <Link to="/cart" className="icon-div" style={{ textDecoration: "none", color: "black" }}>
                                <span className="icon-div">
                                    <HiShoppingCart className="header-icon" />
                                    <p className="icon-name" >CART</p>
                                </span>
                            </Link>

                            <span className="icon-div" id="profile" style={{ color: "black" }}>
                                <BsPersonFill className="header-icon" />
                                <p className="icon-name" >PROFILE</p>
                                <div className="profile-menu">
                                    {user == '' && <div className="profile-item">
                                        <h5>WELCOME!</h5>
                                        <p style={{ fontSize: "0.9rem" }}>To view account details</p>
                                        <button style={{ padding: "0 5px", marginTop: "8px", backgroundColor: "#d3145a", borderRadius: "5px", cursor: "pointer", color: "white", border: "none" }}>
                                            <Link to="/login">LOGIN</Link>
                                        </button>
                                    </div>}
                                    {user != '' && <div className="profile-item">
                                        <Flex>
                                            <Flex alignItems={"center"}>
                                                <img src="	https://img1.junaroad.com/user_profile/thumb_28.jpg" alt="User" />
                                            </Flex>
                                            <Box marginLeft={"7px"}>
                                                <p style={{ color: "#d3145a", fontSize: "0.8rem", fontWeight: "600" }}>Hello {user}!</p>
                                                <p style={{ fontSize: "0.8rem" }}>{user}</p>
                                            </Box>
                                        </Flex>
                                        <button style={{ padding: "0 5px", marginTop: "8px", backgroundColor: "#d3145a", borderRadius: "5px", cursor: "pointer", color: "white", border: "none" }} onClick={()=>setUser('')}>
                                            LOGOUT
                                        </button>
                                    </div>}
                                    <div className="profile-item">
                                        <ul>
                                            <li>ORDERS</li>
                                            <li>RETURN REPLACEMENT</li>
                                            <li>LR CREDITS</li>
                                        </ul>
                                    </div>
                                    <div className="profile-item">
                                        <ul>
                                            <li>ACTIVITY HISTORY</li>
                                            <li>STORIES</li>
                                            <li>SCRAPBOOKS</li>
                                        </ul>
                                    </div>
                                    <div className="profile-item">
                                        <ul>
                                            <li>CUSTOMER SUPPORT</li>
                                            <li>FAQ & HELP</li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
