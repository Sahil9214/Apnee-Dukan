import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/Payment.css";
import axios from "axios";
import { useToast, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const PaymentSection = () => {
  const handleToast = useToast();
  const [cvc, setCvc] = useState("");
  const [expire, setExpire] = useState("");
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [tex,setTex]=useState(0)
  const navigate = useNavigate();
  const state = useSelector((store) => store?.cartReducer?.cart);

  const handleCVC = (e) => {
    setCvc(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCard = (e) => {
    setCard(e.target.value);
  };
  const handleExpire = (e) => {
    setExpire(e.target.value);
  };
  const handleConfirm = () => {
    handleToast({
      title: "Payment Successfull; .",
      description: "Thankyou from shopping with us.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setCard("");
    setCvc("");
    setName("");
    setExpire("");
    setTimeout(() => {
      navigate("/cart");
    }, 3000);
  };
  const val = JSON.parse(localStorage.getItem("id"));

  const getData = async () => {
    try {
      let res = await axios(`http://localhost:8080/users/${val}`);

      let value = res.data?.cart?.reduce((acc, el) => {
        return acc + el.price;
      }, 0);
      setPrice(value);
      value=(value*12)/100;
      setTex(value)
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <main className="container">
        <div className="main">
          {/* <!-- Shipping Address Section  --> */}
          <section className="shipping_address">
            <h2 className="ship_head">Shipping Address</h2>
            <div className="addresses">
              <form action="">
                <div className="address_primary">
                  <div className="info">
                    <p className="bold">Name:</p>
                    <p className="light">{state.name}</p>
                  </div>
                  <div className="info">
                    <p className="bold">Phone:</p>
                    <p className="light">{state.mobile}</p>
                  </div>
                  <div className="info">
                    <p className="bold">Email:</p>
                    <p className="light">{state.email} </p>
                  </div>
                </div>
                <div className="address_secondary">
                  <div className="info">
                    <p className="bold">Name:</p>
                    <p className="light">{state.name}</p>
                  </div>
                  <div className="info">
                    <p className="bold">Phone:</p>
                    <p className="light">{state.mobile}</p>
                  </div>
                  <div className="info">
                    <p className="bold">Email:</p>
                    <p className="light">{state.email}</p>
                  </div>
                </div>
              </form>
            </div>
            <span className="new_address">+ add new address</span>
          </section>
          {/* <!-- Payment Method Section  --> */}
          <section className="payment_method">
            <h2 className="ship_head">Payment Method</h2>
            <div className="card_info">
              <div className="card_head">
                <h2 className="card_title">Debit or Credit Card</h2>
              </div>
              <div className="card_types">
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://img.icons8.com/fluency/512/mastercard.png"
                  alt=""
                />
              </div>
              <form>
                <Input
                  type="text"
                  name="Name"
                  value={name}
                  placeholder="Card Holder"
                  maxlength="60"
                  onChange={handleName}
                />
                <Input
                  type="text"
                  name="Number"
                  value={card}
                  placeholder="Card Number"
                  maxlength="16"
                  onChange={handleCard}
                />
                <div>
                  <Input
                    type="text"
                    name="Name"
                    value={expire}
                    placeholder="Expire"
                    maxlength="4"
                    onChange={handleExpire}
                  />
                  <Input
                    type="text"
                    name="Name"
                    value={cvc}
                    placeholder="CVC"
                    maxlength="3"
                    onChange={handleCVC}
                  />
                </div>
              </form>
              <span className="save_card">Save Card</span>
            </div>
            <div className="e_payment">
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                  alt=""
                />
              </div>
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
                  alt=""
                />
              </div>
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                  alt=""
                />
              </div>
            </div>
            <button onClick={handleConfirm} className="confirm_btn">
              Confirm
            </button>
          </section>
          {/* <!-- Order Summary Section  --> */}
          <section className="order_summary">
            <h2 className="order_head">Order Summary</h2>
            <div className="order_price">
              <hr />
              <div className="price">
                <p>Order price:</p>
                <p>{price}</p>
              </div>
              <div className="price">
                <p>TollTax Includes:</p>
                <p>400</p>
              </div>
              <div className="price">
                <p>Tax:</p>
                <p>{tex}</p>
              </div>
              <br />
              <hr />
              <div className="total_price">
                <p className="dark">Total:</p>
                <p className="dark">{price+tex+400}</p>
              </div>
            </div>
            <img
              className="qr_code"
              src="https://cdn-icons-png.flaticon.com/512/714/714390.png"
              alt=""
            />
            <p className="condition">
              Pay and Confirm Order by QR Code Using <b>Mobile Application</b>
            </p>
            <button className="review_btn">Review and Confirm</button>
          </section>
          <small className="project_by">
            <b>
              Develped by <span>Utkarsh Singhal</span>
            </b>
          </small>
        </div>
      </main>
    </div>
  );
};

export default PaymentSection;
