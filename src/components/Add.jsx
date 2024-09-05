import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addMovie } from '../services/api';
import { toast } from 'react-toastify';

function Add({add}) {

    const [show, setShow] = useState(false);
    const [movie,setMovie] = useState({
        title:"" , language:"" , year:"" , imageUrl:""
    })

    const handleAdd= async()=>{
        const {title,language,year,imageUrl} = movie
        if(!title || !language || !year || !imageUrl){
            toast.warning("Enter valid input!!")
        }
        else{
            const res = await addMovie(movie)
            console.log(res);
            if(res.status==201){
                toast.success("Added successfully!!")
                handleClose()
                setMovie({
                    title:"" , language:"" , year:"" , imageUrl:""
                })
                add(res)
            }
            else{
                toast.error("Adding failed!!")
            }
        }
        
        
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <div className="d-grid p-4">
        <button className='btn btn-info' onClick={handleShow}>Add Movie</button>
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control mb-3" placeholder='Movie Name' onChange={(e)=>{setMovie({...movie,title:e.target.value})}}/>
          <input type="text" className="form-control mb-3" placeholder='Language' onChange={(e)=>{setMovie({...movie,language:e.target.value})}}/>
          <input type="text" className="form-control mb-3" placeholder='Year' onChange={(e)=>{setMovie({...movie,year:e.target.value})}}/>
          <input type="text" className="form-control mb-3" placeholder='Movie Image URL'onChange={(e)=>{setMovie({...movie,imageUrl:e.target.value})}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add