import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage/MainPage";

import Student from "./MainPage/Student";
import Teacher from "./MainPage/Teacher";
import President from "./MainPage/President";
import Businessman from "./MainPage/Businessman";

import StudentView from "./View/Student/StudentView";
import StudentList from "./List/Student/StudentList";
import StudentCreateForm from "./CreateForm/Student/StudentCreateForm";
import StudentUpdateForm from "./UpdateForm/Student/StudentUpdateForm";
import CreatedStudent from "./CreateForm/Student/CreatedStudent";
import StudentDeleted from "./View/Student/StudentDeleted";

import TeacherView from "./View/Teacher/TeacherView";
import TeacherList from "./List/Teacher/TeacherList";
import TeacherCreateForm from "./CreateForm/Teacher/TeacherCreateForm";
import TeacherUpdateForm from "./UpdateForm/Teacher/TeacherUpdateForm";
import CreatedTeacher from "./CreateForm/Teacher/CreatedTeacher";
import TeacherDeleted from "./View/Teacher/TeacherDeleted";

import PresidentView from "./View/President/PresidentView";
import PresidentList from "./List/President/PresidentList";
import PresidentCreateForm from "./CreateForm/President/PresidentCreateForm";
import PresidentUpdateForm from "./UpdateForm/President/PresidentUpdateForm";
import CreatedPresident from "./CreateForm/President/CreatedPresident";
import PresidentDeleted from "./View/President/PresidentDeleted";

import BusinessmanView from "./View/Businessman/BusinessmanView";
import BusinessmanList from "./List/Businessman/BusinessmanList";
import BusinessmanCreateForm from "./CreateForm/Businessman/BusinessmanCreateForm";
import BusinessmanUpdateForm from "./UpdateForm/Businessman/BusinessmanUpdateForm";
import CreatedBusinessman from "./CreateForm/Businessman/CreatedBusibessman";
import BusinessmanDeleted from "./View/Businessman/BusinessmanDeleted";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route path="/" element={<MainPage />} />

        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<StudentView />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/createstudent" element={<StudentCreateForm />} />
        <Route path="/updatestudent/:id" element={<StudentUpdateForm />} />
        <Route path="/createdstudent/:id" element={<CreatedStudent />} />
        <Route path="/deletedstudent/:id" element={<StudentDeleted />} />

        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherView />} />
        <Route path="/teachers" element={<TeacherList />} />
        <Route path="/createteacher" element={<TeacherCreateForm />} />
        <Route path="/updateteacher/:id" element={<TeacherUpdateForm />} />
        <Route path="/createdteacher/:id" element={<CreatedTeacher />} />
        <Route path="/deletedteacher/:id" element={<TeacherDeleted />} />

        <Route path="/president" element={<President />} />
        <Route path="/president/:id" element={<PresidentView />} />
        <Route path="/presidents" element={<PresidentList />} />
        <Route path="/createpresident" element={<PresidentCreateForm />} />
        <Route path="/updatepresident/:id" element={<PresidentUpdateForm />} />
        <Route path="/createdpresident/:id" element={<CreatedPresident />} />
        <Route path="/deletedpresident/:id" element={<PresidentDeleted />} />
        
        <Route path="/businessman" element={<Businessman />} />
        <Route path="/businessman/:id" element={<BusinessmanView />} />
        <Route path="/businessmen" element={<BusinessmanList />} />
        <Route path="/createbusinessman" element={<BusinessmanCreateForm />} />
        <Route path="/updatebusinessman/:id" element={<BusinessmanUpdateForm />} />
        <Route path="/createdbusinessman/:id" element={<CreatedBusinessman />} />
        <Route path="/deletedbusinessman/:id" elemen={<BusinessmanDeleted/>}/>


      </Routes>
    </BrowserRouter>
  );
}

