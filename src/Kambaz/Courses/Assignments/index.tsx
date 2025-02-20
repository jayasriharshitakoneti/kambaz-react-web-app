import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { Link, useParams } from "react-router";
import * as db from "../../Database";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentFunctions from "./AssignmentFunctions";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentButtons />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-4 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentFunctions />
          </div>
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroup className="wd-assignment-list rounded-0">
                <ListGroup.Item className="align-items-center wd-assignment-list-item d-flex p-2">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdTask className="text-success" />
                  <div className="mx-3">
                    <div className="">
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black"
                      >
                        {assignment.name}
                      </Link>
                    </div>
                    <div className=" fs-6 ">
                      <span className="text-danger"> Multiple Modules </span> |{" "}
                      <span className="fw-bold">Not available until</span> May 6
                      at 12:00am |
                    </div>
                    <div className=" fs-6">
                      <span className="fw-bold">Due</span> {assignment.due_date}{" "}
                      |{assignment.points} pts
                    </div>
                  </div>
                  <div className="ms-auto">
                    <GreenCheckmark />
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
