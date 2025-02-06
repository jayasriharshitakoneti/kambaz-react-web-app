import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdTask } from "react-icons/md";

import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentFunctions from "./AssignmentFunctions";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentButtons />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentFunctions />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroup.Item className="align-items-center wd-assignment-list-item d-flex p-2">
              <BsGripVertical className="me-2 fs-3" />
              <MdTask className="text-success" />
              <div className="mx-3">
                <div className="">
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black"
                  >
                    A1
                  </a>
                </div>
                <div className=" fs-6 ">
                  <span className="text-danger"> Multiple Modules </span> |{" "}
                  <span className="fw-bold">Not available until</span> May 6 at
                  12:00am |
                </div>
                <div className=" fs-6">
                  <span className="fw-bold">Due</span> May 13 at 11:59pm | 100
                  pts
                </div>
              </div>
              <div className="ms-auto">
                <div className="float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroup.Item className="align-items-center wd-assignment-list-item d-flex p-2">
              <BsGripVertical className="me-2 fs-3" />
              <MdTask className="text-success" />
              <div className="mx-3">
                <div className="">
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black"
                  >
                    A2
                  </a>
                </div>
                <div className=" fs-6 ">
                  <span className="text-danger"> Multiple Modules </span> |{" "}
                  <span className="fw-bold">Not available until</span> May 13 at
                  12:00am |
                </div>
                <div className=" fs-6">
                  <span className="fw-bold">Due</span> May 20 at 11:59pm | 100
                  pts
                </div>
              </div>
              <div className="ms-auto">
                <div className="float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroup.Item className="align-items-center wd-assignment-list-item d-flex p-2">
              <BsGripVertical className="me-2 fs-3" />
              <MdTask className="text-success" />
              <div className="mx-3">
                <div className="">
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black"
                  >
                    A3
                  </a>
                </div>
                <div className=" fs-6 ">
                  <span className="text-danger"> Multiple Modules </span> |{" "}
                  <span className="fw-bold">Not available until</span> May 20 at
                  12:00am |
                </div>
                <div className=" fs-6">
                  <span className="fw-bold">Due</span> May 27 at 11:59pm | 100
                  pts
                </div>
              </div>
              <div className="ms-auto">
                <div className="float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
