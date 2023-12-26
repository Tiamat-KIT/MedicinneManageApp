import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import CustomNav from "./components/CustomNav";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <CustomNav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
