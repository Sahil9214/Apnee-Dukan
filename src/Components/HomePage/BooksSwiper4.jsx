import { Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "../../CSS/BookSwiper4.css";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfUcR7rPT0DrQXVNrlhzMQA_PfkmDCRLNYg&usqp=CAU",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1505063366573-38928ae5567e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Rm9naW5lciUyMEJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZvZ2luZXIlMjBCb29rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://m.media-amazon.com/images/I/61B1cgcCqxL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
  "https://qph.cf2.quoracdn.net/main-qimg-da787c809a9b2ca879344368d0b8fe1d-pjlq",
  "https://qph.cf2.quoracdn.net/main-qimg-c13484b6e33716c620e0e8fe805f7c63.webp",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1687809934-61BazoqIr3L.jpg?crop=1xw:1xh;center,top&resize=980:*",
  "https://m.media-amazon.com/images/I/51TcWGvqLZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
];

const BooksSwiper4 = () => {
  const [text, setText] = useState("");
  setTimeout(() => {
    let val = Math.floor(10 * Math.random());
    setText(images[val]);
  }, 3000);

  return (
    <div>
      <Text className="BooksSwiperHeading">
        Buying New Books at 40% off on all Books
      </Text>
      <Box className="BookSwiper4Flex">
        <Box style={{ width: "50%" }}>
          <br />
          <br />
          <br />
          <Text>
            Books are the keys that unlock the doors to new realms, where the
            wonders of the imagination come to life, and the depths of knowledge
            reveal their secrets.
          </Text>
          <br />
          <Text className="quote">
            Quote: "A room without books is like a body without a soul." -
            Marcus Tullius Cicero
          </Text>
          <br />
          <br />
          <Link to="/book">
            {" "}
            <Button
              className="BooksBTN"
              bg={"pink"}
              _hover={{
                backgroundColor: "blue.500",
              }}
            >
              View All
            </Button>
          </Link>
        </Box>
        <br />
        <Box style={{ width: "50%" }}>
          <br />
          <br />
          <Image
            margin={"auto"}
            src={text}
            alt="new Books"
            className="Booksswiper4Image"
          />
        </Box>
      </Box>
    </div>
  );
};

export default BooksSwiper4;
