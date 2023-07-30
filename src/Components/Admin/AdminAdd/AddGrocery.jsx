import React, { useState } from "react";
import { Text, Button, Input, Box, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addGrocery } from "../../../Redux/Admin/AdminGrocery/action.grocery";

const AddGrocery = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmit = () => {
    let obj = {
      name,
      price,
      description,
      image1,
    };
    dispatch(addGrocery(obj));
    toast({
      title: "Grocery Added",
      description: "Grocery added Sucessfull",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Box>
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            fontStyle: "italic",
            textAlign: "left",
          }}
        >
          Enter the name of Grocery to Add
        </Text>
        <Input type="text" setName={(e) => setName(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            fontStyle: "italic",
            textAlign: "left",
          }}
        >
          Enter Price of Grocery
        </Text>
        <Input type="number" onClick={(e) => setPrice(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            fontStyle: "italic",
            textAlign: "left",
          }}
        >
          Enter the Description
        </Text>
        <Input type="text" onClick={(e) => setDescription(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            fontStyle: "italic",
            textAlign: "left",
          }}
        >
          Enter the Image Grocery
        </Text>
        <Input type="url" onClick={(e) => setImage1(e.target.value)} />
        <br />
        <br />
        <Box
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              padding: "13px 50px",
              backgroundColor: "#fd5c63",

              color: "#fff",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddGrocery;
