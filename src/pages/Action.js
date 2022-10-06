import React, { useEffect, useState } from "react";
// import { useForm } from 'react-hook-form';
import "./Action.css";
import 'react-toastify/dist/ReactToastify.css';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useHistory } from "react-router-dom";
//  import bgImage from "../assets/ola.mp4"
import axios from "axios";


import Carousel from 'react-bootstrap/Carousel';

function Action() {
    const [OTP, setOTP] = useState("");
    const [input, setInput] = useState('');
    const [data, setData] = useState([])


    const [open, setOpen] = useState(p => !p)
    console.log(open)
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    const handleOpen = () => {
        if (message === "Your email looks good!") {
            setOpen(false)
        }
    }


    const emailMessage = /\S+@\S+\.\S+/;

    const validateEmail = (e) => {
        setInput(e.target.value)
        const email = e.target.value;
        if (emailMessage.test(email)) {
            setIsValid(true);
            setMessage("Your email looks good!");
        } else {
            setIsValid(false);
            setMessage("Please enter a valid email!");
        }
    }

    const history = useHistory();

    const HandleTransfer = () => {
        history.push("/CustDetails")
    }
    const [get, setGet] = useState({

    });
    // const apiCalling = async () => {

    //     await setGet(get)
    //       .then((res) => {
    //         console.log("res", res);


    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    useEffect(() => {
        let data = {
            email: "surendharveeramani@gmail.com"
        }
        axios.post("https://bc10-103-8-116-202.ngrok.io/signup", data)
            .then(res => {
                setGet(res.data)
                console.log(res)
            })
    }, [])
    console.log(get)




    return (

        <div>

            <div className="nav-bar">
                <img src={require("../assets/ola-logo.png")} className="nav-logo ms-4" alt="" />
                <div className="nav-list">
                    <ul className="list-unstyled d-flex">
                        <li className="m-2">ola S1</li>
                        <li className="m-2">ola Electric</li>
                        <li className="m-2">ola futureFactory</li>
                        <li className="m-2">ola Corporate</li>
                    </ul>
                </div>
            </div>

            {/* <video autoPlay loop muted>
                <source src={bgImage} type="video/mp4"/>
            </video>  */}
            <h1 className="text-center mt-3">Book a City Taxi to your destination in town</h1>
            <p className="text-center"> Choose from a range of categories and prices</p>

            <div className="box">

                {open === true ?
                    <div >

                        <img src={require("../assets/ola-logo.png")} className="logo-image" alt="" />
                        <h5 className="text-center">Enter your email account</h5>
                        <p className="text-center text-secondary">A 4-digit OTP will be sent on Mail</p>
                        <div>

                            <input
                                type="email"
                                placeholder="Enter Your Email address"
                                className="mail-input"
                                name="email"

                                onChange={validateEmail}
                            />
                            <div className={`message ${isValid ? "success" : "error"}`} >
                                <p className=" text-center">{message}</p>
                            </div>



                            <button className="btn btn-primary w-100 mt-3 mb-3" onClick={() => { setData([...data, input]); handleOpen(); }}>Next</button>
                        </div>
                    </div>

                    :
                    <div >
                        <img src={require("../assets/ola-logo.png")} className="logo-image" alt="" />
                        <h2 className="text-center">Mail address Verification</h2>
                        <p>Enter the code we just send on your mail address:
                            {data.map(item => (
                                <p className="text-danger">{item}</p>
                            ))}

                        </p>
                        <div className="d-flex  justify-content-center">
                            <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                                secure
                            />

                        </div>
                        <p>Don't receive the code?</p>
                        <ResendOTP className="Resend" handelResendClick={() => console.log("Resend clicked")} />
                        <button className="btn btn-primary w-100 mt-3 mb-3" type="button" onClick={HandleTransfer}> Verify </button>
                    </div>
                }
            </div>

            <Carousel slide={true}>
                <Carousel.Item>
                    <div className="row">
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/auto.png")}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <Carousel.Caption>
                                <h3 className="">Auto</h3>
                                <h6>Get an Auto at your doorstep</h6>
                                <p>The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convenient way to travel everyday.</p>
                            </Carousel.Caption>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/bike.png")}
                                alt="Second slide"
                            />
                        </div>
                        <div class="col">
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/mini.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/prime-sedan.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </div>



                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/prime-play.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </div>



                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-100"
                                src={require("../assets/mini.png")}
                                alt="Third slide"
                            />
                        </div>
                        <div class="col">
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div class="row">
                        <div class="col">
                        <img
                        className="d-block w-100"
                        src={require("../assets/mini.png")}
                        alt="Third slide"
                    />
                        </div>
                        <div class="col">
                          
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                        </div>
                    </div>
                   

                </Carousel.Item>
            </Carousel>


            <div className="hello mb-4">
                <div className="sidebar">
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-auto-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className="sidebar-list">
                        <img src={require("../assets/ola-bike-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-kaali-peeli.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-lux.png")} className="list-logo" alt="" />

                    </div>
                    <div className="sidebar-list">
                        <img src={require("../assets/ola-prime-play.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-prime-sedan-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-prime-suv.png")} className="list-logo mt-4" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-e-rick-active.png")} className="list-logo" alt="" />

                    </div>
                    <div className=" sidebar-list">
                        <img src={require("../assets/ola-mini.png")} className="list-logo" alt="" />

                    </div>



                </div>
                <ul className="d-flex list-unstyled">
                    <li className="ms-5">Auto</li>
                    <li className="ms-5 logo-name">Bike</li>
                    <li className="ms-5 logo-name">Mini</li>
                    <li className="ms-5 logo-name">Prime Sedan</li>
                    <li className="ms-5">Prime Play</li>
                    <li className="ms-5 ">Prime SUV</li>
                    <li className="ms-4 logo-name">LUX</li>
                    <li className="ms-5 logo-name">E-Rick</li>
                    <li className="ms-4 logo-name">Kaali Peeli</li>



                </ul>




            </div>






        </div>


    )
}
export default Action

