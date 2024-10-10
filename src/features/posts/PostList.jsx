import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostsSlice";
import PostAuthor from "../users/usersList";

const PostList = () => {
    const posts = useSelector(selectAllPosts)
    
    const renderPosts = posts.map((post)=>(
      
      
        <article key={post.id} className="border-[2px] border-[#ddd5d5] bg-[#494747] text-white w-[100%] p-[20px] rounded-lg mb-[10px]">
            <h3 className="font-[700] text-[20px]">{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p><PostAuthor userId={post.userId}/></p>
        </article>
    ))
  return (
    <section className="px-[30px] py-[20px]">
        <h2 className="text-white font-[700] text-[30px]">POSTS</h2>
        {renderPosts}
    </section>
  )
}

export default PostList
