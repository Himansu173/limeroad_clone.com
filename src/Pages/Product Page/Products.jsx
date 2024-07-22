import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import IndividualProduct from "./IndividualProduct";
import { Box, Flex } from "@chakra-ui/react";

const Products = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    let res = await fetch("http://localhost:3000/productDetails");
    setData(await res.json());
  }

  useEffect(() => {
    getData();
  }, [])

  const category = ["Travel Effortlessly", "Too Cool To Skip", "Printed Tees FTW", "Look As Classy As Ever", "Keep It Easy", "Fits By Twenty-Eight", "Get His Look", "Tees To Cart Now", "Trendy Picks FTW", "Look Dapper Ahaan", "Travel Effortless"];

  return (
    <div className={styles.productContainer}>
      <div className={styles.productLeft}>
        <p>Trending on Limeroad</p>
        <div style={{ marginTop: "0", width: "87%" }}>
          {category.map((ele) => (
            <Flex key={ele} mt={"10px"}>
              <Box>
                <img src="	https://img0.junaroad.com/user_profile/thumb_profile_5e0dd26e6f4a945d2dad2652-1577965834.png" alt="img" width={"40px"} style={{ borderRadius: "50%" }} />
              </Box>
              <Box color={"gray"} ml={"6px"}>
                <p style={{ fontSize: "0.95rem", padding: "0" }} id="category">{ele}</p>
                <p style={{ fontSize: "0.8rem", marginTop: "-5px" }}>By Crystal</p>
              </Box>
            </Flex>
          ))}
        </div>
      </div>

      <div className={styles.productRight}>
        <div className={styles.allproducts}>
          {data &&
            data.map((prod) => <IndividualProduct key={prod.id}
              id={prod.id}
              image={prod.image}
              price={prod.price}
              before_disc={prod.before_disc}
              brand={prod.brand}
              offer_percent={prod.offer_percent}
            />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
