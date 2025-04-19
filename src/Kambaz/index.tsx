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
import * as userClient from "./Account/client";

export default function Kambaz() {
  const dispatch = useDispatch();
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);

      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();

      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );

      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });

      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }

    dispatch(
      setCourses(
        courses.map((course: any) => {
          if (course._id === courseId) {
            return { ...course, enrolled: enrolled };
          } else {
            return course;
          }
        })
      )
    );
  };

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
    const enrolledUsersInCourse = await courseClient.findUsersForCourse(
      courseId
    );
    for (const user of enrolledUsersInCourse) {
      await userClient.unenrollFromCourse(user._id, courseId);
    }
    const status = await courseClient.deleteCourse(courseId);
    dispatch({ type: "courses/deleteCourse", payload: courseId });
    console.log(status);
  };
  const updateCourse = async () => {
    const updatedCourse = await courseClient.updateCourse(course);
    dispatch({ type: "courses/updateCourse", payload: updatedCourse });
    await findCoursesForUser();
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
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
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
