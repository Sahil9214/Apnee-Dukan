import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AddMen from "./AdminAdd/AddMen";
import AddWomen from "./AdminAdd/AddWomen";
import AddMobile from "./AdminAdd/AddMobile";
import AddLaptop from "./AdminAdd/AddLaptop";
import AddBooks from "./AdminAdd/AddBooks";
import AddGrocery from "./AdminAdd/AddGrocery";
const AdminAddProduct = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Men</Tab>
          <Tab>Women</Tab>
          <Tab>Mobile</Tab>
          <Tab>Grocery</Tab>
          <Tab>Laptop</Tab>
          <Tab>Book</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddMen />
          </TabPanel>
          <TabPanel>
            <AddWomen />
          </TabPanel>
          <TabPanel>
            <AddMobile />
          </TabPanel>
          <TabPanel>
            <AddGrocery />
          </TabPanel>
          <TabPanel>
            <AddLaptop />
          </TabPanel>
          <TabPanel>
            <AddBooks />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminAddProduct;
