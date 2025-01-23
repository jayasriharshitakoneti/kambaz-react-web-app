import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue="harshita"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input
        defaultValue="Harshita"
        placeholder="First Name"
        id="wd-firstname"
      />
      <br />
      <input defaultValue="Koneti" placeholder="Last Name" id="wd-lastname" />
      <br />
      <input defaultValue="2000-07-17" type="date" id="wd-dob" />
      <br />
      <input
        defaultValue="koneti.j@northeastern.edu"
        type="email"
        id="wd-email"
      />
      <br />
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{" "}
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link to="/Kambaz/Account/Signin">Sign out</Link>
    </div>
  );
}
