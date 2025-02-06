import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC.tsx";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h2>Jaya Sriharshita Koneti</h2>
      <br />
      Code repo link:{" "}
      <a
        href="https://github.com/jayasriharshitakoneti/kambaz-react-web-app"
        id="wd-github"
        target="_blank"
      >
        Link
      </a>
      <br />
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
