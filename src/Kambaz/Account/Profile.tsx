import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="profile-container">
      <h3>Profile</h3>
      {profile && (
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <FormControl
              defaultValue={profile.username}
              id="wd-username"
              className="mb-2"
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <FormControl
              defaultValue={profile.password}
              id="wd-password"
              className="mb-2"
              onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFirstName">
            <FormControl
              defaultValue={profile.firstName}
              id="wd-firstname"
              className="mb-2"
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <FormControl
              defaultValue={profile.lastName}
              id="wd-lastname"
              className="mb-2"
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDob">
            <FormControl
              defaultValue={profile.dob}
              id="wd-dob"
              className="mb-2"
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
              type="date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <FormControl
              defaultValue={profile.email}
              id="wd-email"
              className="mb-2"
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Select
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              className="form-control mb-2"
              id="wd-role"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Form.Group>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </Form>
      )}
    </div>
  );
}
