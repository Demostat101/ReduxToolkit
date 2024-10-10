
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, fetchPosts, getPostsError } from "./PostsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  if (postsStatus === "loading") {
    return <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    return (
      <section className="px-[30px] py-[20px] text-white">
        <h2 className="font-[700] text-[30px]">Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => <PostsExcerpt key={post.id} post={post} />).reverse()
        ) : (
          <p>No posts available.</p>
        )}
      </section>
    );
  } else if (postsStatus === "failed") {
    return <div className="w-full flex justify-center">
      <p className="text-red-500 font-[600] text-[20px] text-center bg-white w-fit p-[10px]">{error}</p>
    </div>;
  }

  return null; // Return null if none of the conditions are met
};

export default PostList;
