import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getMovies } from '../services/api';
import { dltMovie } from '../services/api';

function Movies({movie}) {

    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        getdata()
    }, [movie])

    const getdata = async () => {
        const res = await getMovies()
        console.log(res);
        if (res.status == 200) {
            setMovieList(res.data)
            console.log(movieList);

        }
    }

    const handleDelete=async(id)=>{
        const result = await dltMovie(id)
        console.log(result);
        if(result.status==200){
            getdata()
        }        
    }

    return (
        <>

            <h3 className='mt-4'>ALL MOVIES</h3>
            <div className="border border-3 p-3">
            {
                movieList.length > 0 ?               
                 <div className='row'>
                     {
                                movieList.map((item) => (
                                    <Card style={{ width: '18rem' }} className='m-3'>
                                        <Card.Img variant="top" src={item.imageUrl} height={'280px'}/>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                <span>{item.year}</span><br />
                                                <span>{item.language}</span>
                                            </Card.Text>
                                            <Button className='btn btn-dark' onClick={()=>{handleDelete(item.id)}}><i className="fa-solid fa-trash" style={{ color: "#ea1f29", }} /></Button>
                                        </Card.Body>
                                    </Card>
                                ))
                    }
                 </div>
                :
                <h1>No movies available!!</h1>
            }
            </div>


        </>
    )
}

export default Movies