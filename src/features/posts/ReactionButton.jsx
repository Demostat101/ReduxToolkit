import { useDispatch } from 'react-redux';
import { reactionAdded } from './PostsSlice';





const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😊",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};



const ReactionButton = ({post}) => {
    const dispatch = useDispatch()

    const reactionButton = Object.entries(reactionEmoji).map(([name,emoji])=> {
        return (
            <button className='mr-2' key={name} type='button' onClick={()=>dispatch(reactionAdded({postId:post.id, reaction:name}))}>
                {emoji}{post.reactions[name]}
            </button>
        )
    })
  return (
    <div>
      {reactionButton}
    </div>
  )
}

export default ReactionButton
