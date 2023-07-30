import React, { useState } from "react";
import { Text, Input, Button, Box, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postMenData } from "../../../Redux/Admin/AdminMen/action.men";
const AddMen = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
 const toast=useToast()
  const handleAddMenData = () => {
    let obj = {
      name,
      category,
      price,
      description,
      image1,
      image2,
      image3,
      image4,
      image5,
      brand,
    };
    dispatch(postMenData(obj));
    toast({
      title: "Men Cloth Added",
      description: "Men Cloth added Sucessfull",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Box>
        <Text fontSize={"26px"} fontWeight={"700"}>
          Add Men Data
        </Text>
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Name of Cloth & brand
        </Text>
        <Input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Category of Cloth & brand
        </Text>
        <Input type="text" onChange={(e) => setCategory(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Price of Cloth & brand
        </Text>
        <Input type="number" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Description of Cloth & brand
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
          Enter image1 of Cloth & brand url
        </Text>
        <Input type="url" onChange={(e) => setImage1(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter image2 of Cloth & brand url
        </Text>
        <Input type="url" onChange={(e) => setImage2(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter image3 of Cloth & brand url
        </Text>
        <Input type="url" onChange={(e) => setImage3(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter image4 of Cloth & brand url
        </Text>
        <Input type="url" onChange={(e) => setImage4(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter image5 of Cloth & brand url
        </Text>
        <Input type="url" onChange={(e) => setImage5(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          textAlign={"left"}
          fontWeight={"600"}
          fontStyle={"italic"}
        >
          Enter Brand of Cloth & brand url
        </Text>
        <Input type="text" onChange={(e) => setBrand(e.target.value)} />
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

export default AddMen;
