import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, name:"Dude Lebrowski"},
    {id:2, name:"Ashley young"},
    {id:3, name:"Ten Hag"},
    
];

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
    //     postAdded:{
    //       reducer(state,action){
    //         state.push(action.payload)
    //     },
    //     prepare(title, content){
    //         return {
    //             payload: {
    //                 id:nanoid(),
    //                 title,
    //                 content
    //             }
    //         }
    //     }
    // }
}
});


//we import this into the Postslist and use useSelector(selectAllPosts) and map it... this contains all our data
export const selectAllUsers = (state) => state.users;
// export const {postAdded} = postsSlice.actions


//Since its default we can use any name to import it into the store "usersReducer"
export default usersSlice.reducer