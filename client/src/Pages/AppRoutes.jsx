import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

import CatView from "./View/CatView";
import CatList from "./List/CatList";
import CatCreateForm from "./CreateForm/CatCreateForm";
import CatUpdateForm from "./UpdateForm/CatUpdateForm";
import CreatedCat from "./CreateForm/CreatedCat";
import CatDeleted from "./View/CatDeleted";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cat/:id" element={<CatView />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/createcat" element={<CatCreateForm />} />
        <Route path="/updatecat/:id" element={<CatUpdateForm />} />
        <Route path="/createdcat/:id" element={<CreatedCat />} />
        <Route path="/deletedcat/:id" element={<CatDeleted />} />
      </Routes>
    </BrowserRouter>
  );
}

