import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../../CSS/AdminTab.css";
import AdminMobile from "./AdminMobile";
import AdminLaptop from "./AdminLaptop";
import AdminMen from "./AdminMen";
import AdminWomen from "./AdminWomen";
import AdminGrocery from "./AdminGrocery";
const Admin2 = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab className="tabName">Mobile</Tab>
          <Tab className="tabName">Laptop</Tab>
          <Tab className="tabName">Men</Tab>
          <Tab className="tabName">Women</Tab>
          <Tab className="tabName">Grocery</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AdminMobile />
          </TabPanel>
          <TabPanel>
            <AdminLaptop />
          </TabPanel>
          <TabPanel>
            <AdminMen />
          </TabPanel>

          <TabPanel>
            <AdminWomen />
          </TabPanel>
          <TabPanel>
            <AdminGrocery />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Admin2;
