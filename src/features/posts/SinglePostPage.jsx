import { useSelector } from "react-redux"
import { selectPostById } from "./PostsSlice"
import PostAuthor from "../users/usersList"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { useParams } from "react-router-dom"


const SinglePostPage = () => {
  const {postId} = useParams()
    const post = useSelector((state) => {
      console.log("Current state:", state);
      return selectPostById(state, Number(postId))
    })
    
  
    

    if (!post) {
        return (
            <section className="text-white text-[50px] font-[700] text-center">
                <h2>Post not Found</h2>
            </section>
        )
    } else{
      return (
        <article className="border-[2px] border-[#ddd5d5] bg-[#494747] text-white w-[100%] p-[20px] rounded-lg mb-[10px]">
          <h2 className="font-[700] text-[20px] mb-2">{post.title}</h2>
          <p className="mb-3">{post.content}</p>
          <p className="mb-2">
            <PostAuthor userId={post.userId} /> <TimeAgo timestamp={post.date} />
          </p>
          <div>
            <ReactionButton post={post} />
          </div>
    
        </article>
      )
    }

}

export default SinglePostPage
