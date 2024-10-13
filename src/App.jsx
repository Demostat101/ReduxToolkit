import { Route, Routes } from "react-router-dom"
import AddFormPosts from "./features/AddFormPosts"
import PostList from "./features/posts/PostList"
import Layout from "./components/Layout"
import SinglePostPage from "./features/posts/SinglePostPage"




function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<PostList/>}/>

          <Route path="post">
            <Route index element={<AddFormPosts/>}/>
            <Route path=":postId" element={<SinglePostPage/>}/>
          </Route>
          
        </Route>
      </Routes>
      
      
    </div>
  )
}

export default App
