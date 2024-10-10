
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, fetchPosts } from "./PostsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  if (postsStatus === "loading") {
    return <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    return (
      <section>
        <h2>Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => <PostsExcerpt key={post.id} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </section>
    );
  } else if (postsStatus === "failed") {
    return <p>Error fetching posts.</p>;
  }

  return null; // Return null if none of the conditions are met
};

export default PostList;
