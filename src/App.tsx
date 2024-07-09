import { lazy, Suspense } from "react";
import { Loading } from "@src/components/Loading";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  const HomePage = lazy(() => import("@src/views/HomePage"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
