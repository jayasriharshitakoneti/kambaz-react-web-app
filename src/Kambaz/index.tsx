import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import PeopleTable from "./Courses/People/Table";
import { useEffect, useState } from "react";
import * as courseClient from "./Courses/client";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "./Courses/reducer";

export default function Kambaz() {
  const dispatch = useDispatch();
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    const fetchedCourses = await courseClient.fetchAllCourses();
    dispatch(setCourses(fetchedCourses));
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    dispatch({ type: "courses/addCourse", payload: newCourse });
  };
  const deleteCourse = async (courseId: any) => {
    await courseClient.deleteCourse(courseId);
    dispatch({ type: "courses/deleteCourse", payload: courseId });
  };
  const updateCourse = async () => {
    const updatedCourse = await courseClient.updateCourse(course);
    dispatch({ type: "courses/updateCourse", payload: updatedCourse });
    await fetchCourses();
  };

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
            <Route path="/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
