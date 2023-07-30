import { Box, Text, Input, Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const toast = useToast();
  const handleSubmit = async () => {
    let obj = {
      title,
      author,
      genre,
      price,
      description,
      image1,
    };

    try {
      await axios.post(`https://e-commercebackend-h0ag.onrender.com/Bookes`, obj);
      toast({
        title: "Booked Added",
        description: "Bookes added Sucessfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.lo("err", err);
    }
  };

  return (
    <div>
      <Box>
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          Enter the title of Books
        </Text>
        <Input type="text" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            textAlign: "left",

            fontStyle: "italic",
          }}
        >
          Enter the Author of Books
        </Text>
        <Input type="text" onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            textAlign: "left",

            fontStyle: "italic",
          }}
        >
          Enter the Genre of Books
        </Text>
        <Input type="text" onChange={(e) => setGenre(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            textAlign: "left",

            fontStyle: "italic",
          }}
        >
          Enter the Price of Books
        </Text>
        <Input type="number" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            textAlign: "left",

            fontStyle: "italic",
          }}
        >
          Enter the Description of Books
        </Text>
        <Input type="text" onChange={(e)=>setDescription(e.target.value)} />
        <br />
        <Text
          fontSize={"lg"}
          style={{
            fontWeight: "700",
            textAlign: "left",

            fontStyle: "italic",
          }}
        >
          Enter the image of Books
        </Text>
        <Input type="url" onChange={(e) => setImage1(e.target.value)} />
        <br />
        <Box style={{ justifyContent: "center", alignItems: "center" }}>
          <Button
            onClick={handleSubmit}
            style={{
              padding: "14px 40px",
              fontWeight: "700",
              fontStyle: "italic",
              color: "#fff",
              backgroundColor: "#fd5c63",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddBooks;
