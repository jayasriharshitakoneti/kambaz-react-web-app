import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { deleteAssignment } from "./reducer";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentFunctions from "./AssignmentFunctions";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const handleDelete = (assignmentId: string) => {
    const confirmDelete = window.confirm(
      "Confirm if you want to delete this assignment?"
    );
    if (confirmDelete) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (
    <div id="wd-assignments">
      {currentUser?.role === "FACULTY" && <AssignmentButtons />}
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-4 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
            {currentUser?.role === "FACULTY" && <AssignmentFunctions />}
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
                      {currentUser?.role === "FACULTY" ? (
                        <Link
                          to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                          className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black"
                        >
                          {assignment.name}
                        </Link>
                      ) : (
                        <div className="wd-assignment-link text-decoration-none text-black">
                          {assignment.name}
                        </div>
                      )}
                    </div>
                    <div className=" fs-6 ">
                      <span className="text-danger"> Multiple Modules </span> |
                      <span className="fw-bold">Not available until</span> May 6
                      at 12:00am |
                    </div>
                    <div className=" fs-6">
                      <span className="fw-bold">Due</span> {assignment.due_date}
                      |{assignment.points} pts
                    </div>
                  </div>
                  {currentUser?.role === "FACULTY" && (
                    <div className="ms-auto">
                      <GreenCheckmark />
                      <IoEllipsisVertical className="fs-4" />
                      <FaTrash
                        className="text-danger me-2"
                        cursor={"pointer"}
                        onClick={() => handleDelete(assignment._id)}
                      />
                    </div>
                  )}
                </ListGroup.Item>
              </ListGroup>
            ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
