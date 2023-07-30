import React from "react";

import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Box,
} from "@chakra-ui/react";
const SkeletonLoading = () => {
  //bm
  return (
    <div id="productCards">
      <Box style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        <Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default SkeletonLoading;
