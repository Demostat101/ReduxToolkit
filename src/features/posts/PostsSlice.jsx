import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:"Learning Redux Toolkit from scratch", content:"I've heard good things"},
    {id:2, title:"Work on a project with redux toolkit", content:"Goal for this week"},
];

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers: {
        postAdded:{
          reducer(state,action){
            state.push(action.payload)
        },
        prepare(title, content,userId){
            return {
                payload: {
                    id:nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    }
}
});


//we import this into the Postslist and use useSelector(selectAllPosts) and map it... this contains all our data
export const selectAllPosts = (state) => state.posts;

//Action taken which is Add post to the array of objects
export const {postAdded} = postsSlice.actions

//Since its default we can use any name to import it into the store "postsReducer"
export default postsSlice.reducer