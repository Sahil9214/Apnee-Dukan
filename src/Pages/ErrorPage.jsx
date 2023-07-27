import React from "react";
import { Image } from "@chakra-ui/react";
import NotImage from "../Images/NotFound.png";
const ErrorPage = () => {
  return (
    <div>
      <Image src={NotImage} alt="not found" />
    </div>
  );
};

export default ErrorPage;
