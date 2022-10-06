import React from "react";
import { useHistory } from "react-router-dom";
import "./CustDetails.css";


function CustDetails() {

    const history = useHistory();


    const handleLoaction =()=>{
        history.push ("/Location");

    }
    return (
        <div className="Profile">
            <h4 className="text-center">Customer Details:</h4>
            <labe>Full Name:</labe><br></br>
            <form>
                <div class="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" required />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
            </form>
            <select className="form-control mt-3" id="exampleFormControlSelect1">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>

            <label for="inputAddress">Address:</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            <label for="inputAddress2">Address 2:</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            <div class="form-row">
                <div class="form-group col-md-6 mt-2">
                    <label for="inputCity">City:</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4 mt-2">
                    <label for="inputState">State/Union territories:</label>
                    <select id="inputState" class="form-control">
                        <option selected>TamilNadu</option>
                        <option>Puducherry</option>
                        <option>Kerala</option>
                        <option>Andhra Pradesh</option>
                        <option>Karnataka</option>
                    </select>
                </div>
                <div class="form-group col-md-2 mt-2">
                    <label for="inputZip">Zip:</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            <button type="submit" class="btn btn-success mt-2 w-50" onClick={handleLoaction}>Continue</button>

     </div>
    )
}
export default CustDetails