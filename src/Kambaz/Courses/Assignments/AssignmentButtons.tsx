import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

export default function AssignmentButtons() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button
        variant="danger"
        className="me-1 float-end"
        id="wd-add-assignment"
      >
        <FaPlus className="position-relative me-2" />
        Assignment
      </Button>
      <Button
        variant="secondary"
        className="me-2 float-end"
        id="wd-add-assignment-group"
      >
        <FaPlus className="position-relative me-2" />
        Group
      </Button>
      <InputGroup className="mb-2 w-50">
        <InputGroup.Text>
          <MdOutlineSearch />
        </InputGroup.Text>
        <Form.Control
          type="text"
          className="me-2 float-end"
          placeholder="Search..."
          id="wd-search-assignment"
        />
      </InputGroup>
    </div>
  );
}
