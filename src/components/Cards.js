import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {ADD} from '../setupredux/actions/action';
import Cardsdata from './Carddata';

function Cards() {
  const [data,setData]=useState(Cardsdata);
  //console.log(data);
  //setData(data);
  const dispatch=useDispatch();
  const handleAdd=(e)=>{
     // console.log(e);
     dispatch(ADD(e));
  }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
        <div className='row d-flex justify-content-center align-items-center '>
          {data.map((item,i)=>(
            <>
        
               <Card style={{ width: '22rem',border:"none"}} className="mx-2" key={i}>
                <Card.Img variant="top" src={item.imgdata} width="250" height="250" />
                <Card.Body>
                  <Card.Title className='text-center'>{item.rname}</Card.Title>
                  <Card.Text className='text-center'>
                   ₹{item.price}
                  </Card.Text>
                  <div className='d-flex justify-content-center'>
                  <Button variant="primary" className='col-lg-12' onClick={()=>handleAdd(item)}>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            
            </>
          ))}
        </div>
    </div>
  )
}

export default Cards