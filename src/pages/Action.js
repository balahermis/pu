import React, { useState } from "react";
// import { useForm } from 'react-hook-form';
import "./Action.css";
import 'react-toastify/dist/ReactToastify.css';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useHistory } from "react-router-dom";

function Action() {
    const [OTP, setOTP] = useState("");
    const [input, setInput] = useState('');
  const [data, setData] = useState([])


  const listItems = () => {
    console.log(input)
    setData([...data, input]);
  }

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

const HandleTransfer=()=>{
 history.push("/CustDetails")
}

    return (

        <div>

            <div className="box">
                {open === true ?
                    <div >
                        <img src={require("../assets/ola-logo.png")} className="logo-image" alt="" />
                        <h5 className="text-center">Enter your email account</h5>
                        <p className="text-center text-secondary">A 4-digit OTP will be sent on Mail</p>
                        <div>

                        <input
                                variant="outlined"
                                placeholder="Add todo"
                                margin="normal"

                                value={input}
                                onChange={(e) => { setInput(e.target.value) }}

                            />
                            <button onClick={listItems}>add me</button>
                            <ul>
                              
                            </ul>

                            <input
                                type="email"
                                placeholder="Enter Your Email address"
                                className="mail-input"
                                onChange={validateEmail}
                            />
                            <div className={`message ${isValid ? "success" : "error"}`} >
                                <p className=" text-center">{message}</p>
                            </div>


                      
                            <button className="btn btn-primary w-100 mt-3 mb-3" onClick={handleOpen}>Next</button>
                        
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
                        <button className="btn btn-primary w-100 mt-3 mb-3" type="button"  onClick={HandleTransfer}> Verify </button>




                    </div>
                }
            </div>





        </div>


    )
}
export default Action

