import React, { useState } from "react";
import { Text, Input, Button, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postMenData } from "../../../Redux/Admin/AdminMen/action.men";
import { getWomenData } from "../../../Redux/Admin/AdminWomen/action.women";
import { postMobile } from "../../../Redux/Admin/AdminMobile/action.mobile";
const AddWomen = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [image1, setImage1] = useState("");
  const [description, setDescription] = useState("");
  const [ram, setRam] = useState(0);
  const [battery, setBattery] = useState("");
  const [storage, setStorage] = useState("");

  const dispatch = useDispatch();

  const handleAddMenData = () => {
    let obj = {
      name,
      ram,
      Battery: battery,
      price,
      description,
      image1,
      storage,
      brand,
    };
    dispatch(postMobile(obj));
  };

  return (
    <div>
      <Box>
      <Text fontSize={"26px"} fontWeight={"700"}>
          Add Mobile Data
        </Text>
      
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Name of Mobile
        </Text>
        <Input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter RAM Size
        </Text>
        <Input type="text" onChange={(e) => setRam(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Price of Mobile
        </Text>
        <Input type="number" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Description of Mobile
        </Text>
        <Input type="text" onChange={(e) => setDescription(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          {" "}
          Enter image1 of Mobile
        </Text>
        <Input type="url" onChange={(e) => setImage1(e.target.value)} />
        <br />

        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Brand of Mobile
        </Text>
        <Input type="text" onChange={(e) => setBrand(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Price of Mobile
        </Text>
        <Input type="text" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Battery of Mobile
        </Text>
        <Input type="text" onChange={(e) => setBattery(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Battery of Storage
        </Text>
        <Input type="text" onChange={(e) => setStorage(e.target.value)} />
        <br />

        <br />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
          style={{
            padding: "13px 50px",
            backgroundColor: "#fd5c63",
            fontSize: "22px",
            color: "#fff",
          }}
          
          onClick={handleAddMenData}>Submit</Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddWomen;
