import PostAuthor from "../users/usersList";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExcerpt = ({ post }) => {
  return (
    <article
      
      className="border-[2px] border-[#ddd5d5] bg-[#494747] text-white w-[100%] p-[20px] rounded-lg mb-[10px]"
    >
      <h3 className="font-[700] text-[20px]">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} /> <TimeAgo timestamp={post.date} />
      </p>
      <div>
        <ReactionButton post={post} />
      </div>
    </article>
  );
};

export default PostsExcerpt;
