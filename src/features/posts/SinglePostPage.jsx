import { useSelector } from "react-redux"
import { selectPostById } from "./PostsSlice"
import PostAuthor from "../users/usersList"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"


const SinglePostPage = () => {
    const post = useSelector((state) => selectPostById(state, postId))

    if (!post) {
        return (
            <section>
                <h2>Post not Found</h2>
            </section>
        )
    }
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} /> <TimeAgo timestamp={post.date} />
      </p>
      <div>
        <ReactionButton post={post} />
      </div>

    </article>
  )
}

export default SinglePostPage
