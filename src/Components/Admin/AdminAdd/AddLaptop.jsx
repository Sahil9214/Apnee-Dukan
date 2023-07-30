import { Input, Text, Button, Box, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLaptop } from "../../../Redux/Admin/AdminLaptop/action.laptop";

const AddLaptop = () => {
  const toast=useToast()
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");

  const [battery_life, setBattery] = useState("");
  const [screen_size, setScreenSize] = useState("");
  const [operating_system, setOperatingSystem] = useState("");
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    let obj = {
      name,
      price,
      description,
      image1,
      ram,
      storage,
      battery_life,
      screen_size,
      operating_system,
      brand,
      warranty: "1 year",
      rating: 4.7,
      review_number: 1320,

      special:
        "Extra ₹2,000 off on Netbanking transactionsGet Sennheiser HD 350BT headset worth ₹8,990 at ₹1,999.Additional ₹2,000 off for employees of select organisations. Click here to know morIncludes Word, Excel and PowerPoint",
    };

    dispatch(addLaptop(obj));
    toast({
      title: "laptop Added",
      description: "Laptop added Sucessfull",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Box>
        <Text fontSize={"26px"} fontWeight={"700"}>
          Add Laptop Data
        </Text>
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the name of Laptop
        </Text>
        <Input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the Priceof Laptop
        </Text>
        <Input type="text" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the Description of Laptop
        </Text>
        <Input type="text" onChange={(e) => setDescription(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the image1 of Laptop
        </Text>
        <Input type="text" onChange={(e) => setImage1(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the ram of Laptop
        </Text>
        <Input type="text" onChange={(e) => setRam(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the storage of Laptop
        </Text>
        <Input type="text" onChange={(e) => setStorage(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the battery of Laptop
        </Text>
        <Input type="text" onChange={(e) => setBattery(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the ScreenSize of Laptop
        </Text>
        <Input type="text" onChange={(e) => setScreenSize(e.target.value)} />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the Operating System of Laptop
        </Text>
        <Input
          type="text"
          onChange={(e) => setOperatingSystem(e.target.value)}
        />
        <br />
        <Text textAlign={"left"} fontSize={"lg"} fontWeight={"600"}>
          Enter the Brand of Laptop
        </Text>
        <Input type="text" onChange={(e) => setBrand(e.target.value)} />
        <br />
        <Button
          style={{
            justifyContent: "center",
            alignItems: "center",

            padding: "13px 50px",
            backgroundColor: "#fd5c63",
            fontSize: "22px",
            color: "#fff",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddLaptop;
