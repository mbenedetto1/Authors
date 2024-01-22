import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const ShowAuthor = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [])
    const changeHandler = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }
  return (
    <div>
        <h1>Edit Author</h1>
        <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type='text' id= "name" name='name' onChange={changeHandler} value={author.name}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            <button type='submit'>Update Author</button>
        </form>
    </div>
  )
}

export default ShowAuthor