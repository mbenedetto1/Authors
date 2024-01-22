import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'



const Dashboard = () => {
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                console.log(res.data)
            setAuthors(res.data)})
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setAuthors(authors.filter(author => author._id !== id))
            })
            .catch(err => console.log(err))
    }
    const editHandler = (e) => {
        navigate(`/authors/${e.target.value}`)
    }

  return (
    <div>
        <h2>We have quotes by:</h2>

        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((author, i) => {
                        return <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <button onClick={editHandler} value={author._id}>Edit</button>
                                
                                <button onClick={() => deleteHandler(author._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard