import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const NewAuthor = () => {
    const [author, setAuthor] = useState({
        name: ""
    })
    const [errors, setErrors] = useState({}) 
    const navigate = useNavigate()
    const changeHandler = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", author)
            .then(res => {console.log(res), navigate('/');
            }
            )
            .catch(err => {console.log(err.response.data.errors);
            setErrors(err.response.data.errors)})
    }


  return (
    <div>
        <h1>Add a New Author</h1>
        <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type='text' id= "name" name='name' onChange={changeHandler}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            <button type='submit'>Add Author</button>
        </form>
    </div>
  )
}

export default NewAuthor