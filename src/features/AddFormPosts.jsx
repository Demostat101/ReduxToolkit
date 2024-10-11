import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './posts/PostsSlice';
import { selectAllUsers } from './users/usersSlice';

const AddFormPosts = () => {
    const [title,setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const onTitleChanged = (e)=> setTitle(e.target.value)
    const onContentChanged = (e)=> setContent(e.target.value)
    const onAuthorChanged = (e)=> setUserId(e.target.value)

    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)


    const onSavePostClicked = ()=>{
        if (title && content) {
            dispatch(
                postAdded( title,content,userId)
            )
            setTitle("")
            setContent("")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map((user)=>(
        <option value={user.id} key={user.id}>
            {user.name}
        </option>
        
    ))

    
    

  return (
    <section className='text-white px-[30px] py-[20px]'>
      <h2 className='font-[700] text-[30px] animate-bounce'>Add a new Post</h2>
      <form action="" onSubmit={e => e.preventDefault()}>
        <label htmlFor="title" className='font-[600]'>Post Title</label> <br />
        <input className='w-full h-[40px] rounded-md text-black pl-2' id='title' type="text" value={title} onChange={onTitleChanged} /> <br /> <br />
        <label htmlFor="author">Author:</label> <br />
        <select className='w-full h-[40px] rounded-md text-black pl-2' name="" id="author" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}
        </select> <br /> <br />
        <label htmlFor="content" className='font-[600]'>Post Content</label> <br />
        <textarea className='w-full h-[100px] rounded-md text-black pl-2' id='content' type="text" value={content} onChange={onContentChanged} /> <br /> <br />


        <button className={!canSave ? 'w-full bg-[#d3cbcb] text-black font-[500] rounded-md py-2 hover:ring-2 hover:ring-red-300' : 'w-full bg-white text-black font-[500] rounded-md py-2 hover:ring-2 hover:ring-green-300'} type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  )
}

export default AddFormPosts
