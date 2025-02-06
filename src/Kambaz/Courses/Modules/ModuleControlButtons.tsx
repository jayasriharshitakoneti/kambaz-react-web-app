import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="m-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
