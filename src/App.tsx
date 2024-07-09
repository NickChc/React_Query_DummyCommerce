import { lazy, Suspense } from "react";
import { Loading } from "@src/components/Loading";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  const HomePage = lazy(() => import("@src/views/HomePage"));
  const PostPage = lazy(() => import("@src/views/PostPage"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
