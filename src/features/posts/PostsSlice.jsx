import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit from scratch",
    content: "I've heard good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Work on a project with redux toolkit",
    content: "Goal for this week",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === Number(postId));
      

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

//we import this into the Postslist and use useSelector(selectAllPosts) and map it... this contains all our data
export const selectAllPosts = (state) => state.posts;

//Action taken which is Add post to the array of objects
export const { postAdded, reactionAdded } = postsSlice.actions;

//Since its default we can use any name to import it into the store "postsReducer"
export default postsSlice.reducer;
