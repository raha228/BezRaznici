import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import AllPostsPage from "./pages/AllPostsPage";
import PostPage from "./pages/PostPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<AllPostsPage/>}/>
            <Route path='post/:id' element={<PostPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
