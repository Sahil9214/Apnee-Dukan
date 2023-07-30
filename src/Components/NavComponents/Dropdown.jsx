import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import "./dropdown.css";

let accessories = [
  "Tablet Accessorries",
  "Mobile Accessories",
  "Memory Cards",
  "Cables & Cords",
  "Chargers & Adapters",
];
const Dropdown = () => {
  return (
    <div>
      <Box
        backgroundColor={"rgb(37,47,100)"}
        color="white"
        // p={1}
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-between",
        }}
        pl={[0, 0, 0, 4, 12]}
        pr={[0, 0, 0, 4, 12]}
        fontSize={["13px", "13px", "13px", "16px"]}
      >
        {/*------------------------------------mobile dropdown-----------------------------*/}
        <Flex alignItems="center">
          <div className="dropdown">
            <RouterLink to="/mobile">
              <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
                <button className="dropbtn" style={{ fontSize: "13px" }}>
                  MOBILE & TABLETS
                </button>
                <BiChevronDown />
              </Flex>
            </RouterLink>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Box style={{ display: "flex", gap: "50px" }} pl={10} pt={4}>
                    <Box>
                      <RouterLink to="/mobile">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          SmartPhones
                        </Text>
                      </RouterLink>
                      <RouterLink to="/mobile">
                        <Text pt={6} pb={6} fontWeight={"semibold"}>
                          SMARTWATCHES
                        </Text>
                      </RouterLink>
                      <RouterLink to="/mobile">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Accessories
                        </Text>
                      </RouterLink>

                      {accessories.map((el, index) => {
                        return (
                          <RouterLink to="/mobile">
                            <Text fontSize={"14px"} mt={2} key={index}>
                              {el}
                            </Text>
                          </RouterLink>
                        );
                      })}
                    </Box>
                    <Box>
                      <RouterLink to="/mobile">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          mens & Headsets
                        </Text>
                      </RouterLink>
                      <RouterLink to="/mobile">
                        <Text
                          fontWeight={"semibold"}
                          fontSize={"16px"}
                          pt={6}
                          pb={6}
                        >
                          Tablets & eReaders
                        </Text>
                      </RouterLink>
                      <RouterLink to="/mobile">
                        <Text fontSize={"14px"} mt={2}>
                          Every Day use Tablets below 15000
                        </Text>
                      </RouterLink>
                      <RouterLink to="/mobile">
                        <Text fontSize={"14px"} mt={2}>
                          Premium Tablets, above 15001
                        </Text>
                      </RouterLink>
                      <RouterLink to="/mobile">
                        <Text
                          fontWeight={"semibold"}
                          fontSize={"16px"}
                          pt={6}
                          pb={6}
                        >
                          Power Banks
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/mobile">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          AI Learning Robots
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/mobile">
                        <Image
                          mb={-2}
                          ml={14}
                          width="95%"
                          src="https://i.ibb.co/8D0JyY3/tablet-nav1.jpg"
                          alt="image"
                        />
                      </RouterLink>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Flex>
        {/**-----------------------------------televison dropdown--------------------------------- */}
        <Flex alignItems="center">
          <div className="dropdown">
            <RouterLink to="/televisions">
              <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
                <button className="dropbtn" style={{ fontSize: "13px" }}>
                  TELEVISION
                </button>
                <BiChevronDown />
              </Flex>
            </RouterLink>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Box
                    style={{ display: "flex", gap: "50px" }}
                    pl={10}
                    pt={4}
                    pb={6}
                  >
                    <Box>
                      <RouterLink to="/televisions">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Televisions
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Smart TV's
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          32 Inch Tv's
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          43 Inc TV's
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          55 Inch TV's
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Android TV's
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/televisions">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Gaming
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Consoles
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Accessories
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Titles
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Projectors
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Streming Devices
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/televisions">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Reconnect Disney | Marvel Audio Collections
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          TV & Audio Accessiories
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Vertual Reality Headsets
                        </Text>
                      </RouterLink>
                      <RouterLink to="/televisions">
                        <Text fontSize={"14px"} mt={3}>
                          Stablizers & Surge Protections
                        </Text>
                      </RouterLink>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Flex>
        {/*------------------------------------men dropdown----------------------------------*/}
        <Flex alignItems="center">
          <div className="dropdown">
            <RouterLink to="/men">
              <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
                <button className="dropbtn" style={{ fontSize: "13px" }}>
                  MEN CLOTHING
                </button>
                <BiChevronDown />
              </Flex>
            </RouterLink>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Box
                    style={{ display: "flex", gap: "50px" }}
                    pl={10}
                    pt={4}
                    pb={6}
                  >
                    <Box>
                      <RouterLink to="/men">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          JEANS
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Straight Leg Jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Slim Fit Jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Skinny Jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Bootcut Jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Tapered Jeans
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/men">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          SHIRTS
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Button-down shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Polo shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Henley shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Dress shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Flannel shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Hawaiian shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Chambray shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Oxford shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Bowling shirt
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/men">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          PANTS
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Track pants
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          {" "}
                          Chinos{" "}
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Dress pants
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Overalls
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Suit pants
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Capri pants (for a cropped style)
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Bermuda shorts
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/men">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Kurtas
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Straight-cut kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Angrakha kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Pathani kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Sherwani
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Indo-Western kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/men">
                        <Text fontSize={"14px"} mt={3}>
                          Bhopali kurta
                        </Text>
                      </RouterLink>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Flex>
        {/*------------------------------------home dropdown--------------------------------------*/}
        <Flex alignItems="center">
          <div className="dropdown">
            <RouterLink to="/women">
              <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
                <button className="dropbtn" style={{ fontSize: "13px" }}>
                  WOMEN CLOTHING
                </button>
                <BiChevronDown />
              </Flex>
            </RouterLink>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Box
                    style={{ display: "flex", gap: "50px" }}
                    pl={10}
                    pt={4}
                    pb={6}
                  >
                    <Box>
                      <RouterLink to="/women">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          T-Shirts
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Crew neck t-shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          V-neck t-shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Scoop neck t-shirts
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Henley t-shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Crop top
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Longline t-shirt
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Off-the-shoulder t-shirt
                        </Text>
                      </RouterLink>
                    </Box>

                    <Box>
                      <RouterLink to="/women">
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Women Kurtas
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Anarkali kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          A-line kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          A-line kurta
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Women Jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Skinny jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Straight-leg jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Bootcut jeans
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Boyfriend jeansonvertible
                        </Text>
                      </RouterLink>
                      <RouterLink to="/women">
                        <Text fontSize={"14px"} mt={3}>
                          Cropped jeans
                        </Text>
                      </RouterLink>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Flex>
        {/**----------------------------------computer dropdown-------------------------------- */}
        <Flex alignItems="center">
          <RouterLink to="/laptop">
            <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
              <button className="dropbtn" style={{ fontSize: "13px" }}>
                COMPUTERS
              </button>
              <BiChevronDown />
            </Flex>
          </RouterLink>
        </Flex>
        {/*-----------------------------------camera dropdown-----------------------------*/}
        {/* <Flex alignItems="center">
        <div className="dropdown">
        <RouterLink to="/camera">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
        <button className="dropbtn" style={{fontSize : "13px"}}>
        CAMERA
      </button>
        <BiChevronDown />
      </Flex>
        </RouterLink>
        <div className="dropdown-content">
          <div className="row">
            <div className="column">
            <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                <Box>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} >DSLR Cameras</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Mirroless Cameras Cameras</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Point & Shoot Cameras</Text> 
                </RouterLink> 
                <RouterLink to="/camera">             
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>ProSumer Cameras</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Action Cameras</Text>  
                </RouterLink> 
                <RouterLink to="/camera">             
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Photo Storage Devices</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Memory Cards</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Pen Drives</Text>
                </RouterLink>
                </Box>

                <Box>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Binoculars</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Camera Lens</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Digital Camera Accessories</Text> 
                </RouterLink>               
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Camera Batteries & Chargers</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Camera Bags & Cases</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Tripods & Monopods</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Action Camera Accessories</Text>
                </RouterLink>
                </Box>

          </Box>
            </div>
          </div>
        </div>
      </div>
      </Flex> */}
        {/*------------------------------------kitchen dropdown-----------------------------*/}
        <Flex alignItems="center">
          <div className="dropdown">
            <RouterLink to="/grocery">
              <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
                <button className="dropbtn" style={{ fontSize: "13px" }}>
                  Grocery
                </button>
                <BiChevronDown />
              </Flex>
            </RouterLink>
          </div>
        </Flex>
        {/*------------------------------------personal dropdown-----------------------------*/}
        <Flex alignItems="center">
          <RouterLink to="/personal">
            <Flex _hover={{ backgroundColor: "#e42529" }} p={3}>
              <button className="dropbtn" style={{ fontSize: "13px" }}>
                PERSONAL CARE
              </button>
              <BiChevronDown />
            </Flex>
          </RouterLink>
        </Flex>

        {/*------------------------------------admin-----------------------------*/}
        {/* <Flex alignItems="center">
        <RouterLink to="/admin/login">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
          <button className="dropbtn" style={{fontSize : "13px"}}>
            ADMIN
          </button>
          </Flex>
        </RouterLink>
         
        </Flex> */}
      </Box>
    </div>
  );
};

export default Dropdown;
