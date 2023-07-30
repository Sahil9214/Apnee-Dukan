import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { adminGetGrocery } from "../../Redux/Admin/AdminGrocery/action.grocery";
import { getLaptop } from "../../Redux/Admin/AdminLaptop/action.laptop";
import { getMenData } from "../../Redux/Admin/AdminMen/action.men";
import { getWomenData } from "../../Redux/Admin/AdminWomen/action.women";
import { getMobile } from "../../Redux/Admin/AdminMobile/action.mobile";
import axios from "axios";
const Barchart1 = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState(0);
  const [mobile,setMobile]=useState(0);
  const [laptop,setLaptop]=useState(0);
  const [grocery,setGrocery]=useState(0);
  const [men,setMen]=useState(0)
  const [women,setWomen]=useState(0)

  const getData = async () => {
    try {
      let bookData = await axios.get(`http://localhost:8080/Bookes`);
      setBook(bookData.data.length)
      let menData = await axios.get(`http://localhost:8080/men`);
      setMen(menData.data.length)
      let womenData = await axios.get(`http://localhost:8080/women`);
      setWomen(womenData.data.length)
      let groceryData = await axios.get(`http://localhost:8080/groceries`);
      setGrocery(groceryData.data.length)
      let laptopData = await axios.get(`http://localhost:8080/laptop`);
      setLaptop(laptopData.data.length)
      let mobileData=await axios.get(`http://localhost:8080/mobile`);
      setMobile(mobileData.data.length)
    } catch (err) {
      console.log("errr");
    }
  };

  useEffect(() => {
   
    getData();
  }, []);

  return (
    <div>
      <Pie
        data={{
          labels: [
            "Laptop",
            "Mobile",
            "Men Cloths",
            "Women Cloths",
            "Grocery",
            "Books",
          ],
          datasets: [
            {
              label: "# of votes",
              data: [
                laptop,
                mobile,
                men,
                women,
                grocery,
                book,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            {
              label: "Quantity",
              data: [
                laptop,
                mobile,
                men,
                women,
                grocery,
                book,
              ],
              backgroundColor: "orange",
              borderColor: "red",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default Barchart1;
