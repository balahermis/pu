import "bootstrap/dist/css/bootstrap.min.css";
// import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DriverDetailedRegnFormPage = () => {
  // ----------------------------------------------------------------
  // DRIVER REGN DETAILS
  // (driver id -auto generate)
  // (phone - get from previous page)
  // email
  // licenseid
  // car id
  // gender
  // insurance id
  // ----------------------------------------------------------------
  // CAR DETAILS
  // (car id - get from previous page)
  // rc numbers
  // model
  // year
  // owner id
  // company
  // category
  // insurance
  // ----------------------------------------------------------------
  // OWNER DETAILS
  // (owner id - get from previous page)
  // aadhar id
  // phone
  // address
  // email

  // ----------------------------------------------------------------

  return (
    <div>
      <h1>DriverDetailedRegnFormPage - 1 of 3</h1>
      <hr></hr>
      <div className="myFormContainer d-flex justify-content-center">
        <Form className="w-50 text-start">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Driver ID</Form.Label>
            <Form.Control type="text" disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone No</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>License ID</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Car ID</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="w-25">Gender</Form.Label>
            <Form.Check
              inline
              className="w-25"
              type="radio"
              name="gender"
              value="female"
              id={`default-radio-female`}
              label={`Female`}
            />
            <Form.Check
              inline
              className="w-25"
              type="radio"
              name="gender"
              value="male"
              id={`default-radio-male`}
              label={`Male`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Insurance ID</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary">Continue...</Button>
        </Form>

        {/* // DRIVER REGN DETAILS
            // (driver id -auto generate)
            // (phone - get from previous page)
            // email
            // licenseid
            // car id
            // gender
            // insurance id 
        */}
      </div>
    </div>
  );
};
export default DriverDetailedRegnFormPage;
