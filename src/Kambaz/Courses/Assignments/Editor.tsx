import { Button, Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Form id="wd-assignments-editor">
      <Form.Group as={Col} controlId="assignmentName">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" value="A1" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="assignmentDescription">
        <Form.Control
          as="textarea"
          rows={10}
          cols={50}
          value={
            "The assignment is available online. Kindly submit a Netlify URL."
          }
        />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="assignmentPoints">
        <Form.Label column sm={2}>
          Points
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="w-50" type="text" value={100} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="assignmentGroup">
        <Form.Label column sm={2}>
          Assignment Group
        </Form.Label>
        <Col sm={10}>
          <Form.Select className="w-50">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="exams">EXAMS</option>
            <option value="project">PROJECT</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="assignmentGradeDisplay">
        <Form.Label column sm={2}>
          Display Grade as
        </Form.Label>
        <Col sm={10}>
          <Form.Select className="w-50">
            <option value="percentage">Percentage</option>
            <option value="points">CGPA</option>
            <option value="points">Marks</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="assignmentSubmissionType"
      >
        <Form.Label column sm={2}>
          Submission Type
        </Form.Label>
        <Col sm={10} className="border border-secondary w-50 rounded-3 p-3">
          <Form.Select>
            <option value="online">Online</option>
            <option value="offline">Mail</option>
          </Form.Select>
          <Form.Group
            as={Row}
            className="my-2"
            controlId="assignmentOnlineEntryOptions"
          >
            <Form.Label column className="fw-bold">
              Online Entry Options
            </Form.Label>
            <Form.Check
              type="checkbox"
              id="wd-text-entry"
              className="m-3"
              label="Text Entry"
            />
            <Form.Check
              type="checkbox"
              id="wd-website-url"
              className="m-3"
              label="Website URL"
            />
            <Form.Check
              type="checkbox"
              id="wd-media-recordings"
              className="m-3"
              label="Media Recordings"
            />
            <Form.Check
              type="checkbox"
              id="wd-student-annotation"
              className="m-3"
              label="Student Annotation"
            />
            <Form.Check
              type="checkbox"
              id="wd-file-upload"
              className="m-3"
              label="File Uploads"
            />
          </Form.Group>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="assignmentAssignTo">
        <Form.Label column sm={2}>
          Assign
        </Form.Label>
        <Col sm={10} className="border border-secondary w-50 rounded-3 p-3">
          <Form.Group className="mb-3" controlId="assignmentAssignTo">
            <Form.Label column>Assign To</Form.Label>
            <div className="d-flex align-items-center">
              <div className="badge bg-secondary me-2 d-flex align-items-center">
                Everyone
                <button
                  type="button"
                  className="btn-close btn-close-white ms-2"
                  aria-label="Remove"
                  style={{ fontSize: "0.75rem" }}
                ></button>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="assignmentDueDate">
            <Form.Label column>Due</Form.Label>
            <Form.Control type="date" value="2025-05-18" />
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Group className="mb-3" controlId="assignmentAvailableFrom">
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" value="2025-05-01" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="assignmentAvailableUntil">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" value="2025-05-12" />
              </Form.Group>
            </Col>
          </Form.Group>
        </Col>
      </Form.Group>
      <div className="float-end mx-5">
        <Button variant="secondary" className="mx-2" id="wd-cancel">
          Cancel
        </Button>
        <Button variant="danger" className="mx-2" id="wd-save">
          Save
        </Button>
      </div>
    </Form>
  );
}
