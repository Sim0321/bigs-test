import { Route, Routes } from "react-router-dom";
import MainPage from "@/pages/main";

import DetailPage from "@/pages/news/Detail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/news/:id" element={<DetailPage />} />
    </Routes>
  );
}
