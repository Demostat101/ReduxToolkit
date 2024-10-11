


import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, fetchPosts, getPostsError } from "./PostsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";
import { fetchUsers } from "../users/usersSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
  }, [postsStatus, dispatch]);

  if (postsStatus === "loading") {
    return <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const reversedPosts = [...posts].reverse(); // Reverse for display
    return (
      <section className="px-[30px] py-[20px] text-white">
        <h2 className="font-[700] text-[30px]">Posts</h2>
        {reversedPosts.length > 0 ? (
          reversedPosts.map((post) => <PostsExcerpt key={post.id} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </section>
    );
  } else if (postsStatus === "failed") {
    return (
      <div className="w-full flex justify-center">
        <p className="text-red-500 font-[600] text-[20px] text-center bg-white w-fit p-[10px]">{error}</p>
      </div>
    );
  }

  return null; // Return null if none of the conditions are met
};

export default PostList;

