import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-container">
      <h3>Profile</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            type="text"
            defaultValue="harshita"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            defaultValue="123"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            defaultValue="Harshita"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            defaultValue="Koneti"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDob">
          <Form.Control type="date" defaultValue="2000-07-17" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            defaultValue="koneti.j@northeastern.edu"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRole">
          <Form.Select defaultValue="FACULTY">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </Form.Group>
        <Link to="/Kambaz/Account/Signin">
          <Button variant="danger" type="button" className="w-100">
            Sign out
          </Button>
        </Link>
      </Form>
    </div>
  );
}
