import  Table  from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import '../components/style.css';
import { useParams ,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {DEL,ADD, REMOVE_ITEM} from '../setupredux/actions/action';
function CardDetails() {

  const [data,setData]=useState([]);
  const {id}=useParams();
  //console.log(id);
  const getdata=useSelector((state)=>state.cartreducer.carts);
  //console.log(getdata);

  useEffect(()=>{
    compare();
  },[id])
  //compare id 

  const compare=()=>{
    let comparedata=getdata.filter((e)=>{
      return e.id==id;
    })
    setData(comparedata);
  }
  //add data
   const handleAdd=(e)=>{
     // console.log(e);
     dispatch(ADD(e));
  }

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const del=(id)=>{
      dispatch(DEL(id));
      navigate('/');
  }
  const remove=(item)=>{
    dispatch(REMOVE_ITEM(item));
  }
  return (
    <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>
       
              
              {data.map((item,i)=>{
                return (
                  <>
                <div className='details-card' key={i}>
                    <div className='item-img'>
                    <img src={item.imgdata} 
                    alt="logo" width="320px" height="300px"/>
                </div>
                <Table>
                  <tr>
                    <td>
                      <p><strong>Restaurant:</strong>{item.rname}</p>
                      <p><strong>Price:</strong>₹ {item.price}</p>
                      <p><strong>Dishes:</strong>{item.address} </p>
                      <p><strong>Total:</strong>₹ {item.price *item.qnty}</p>
                      <div className='mt-5 d-flex justify-content-between align-items-center'
                      style={{backgroundColor:"lightgrey",width:100,cursor:"pointer",color:"black"}}>
                        <span style={{fontSize:24 }} onClick={item.qnty<=1  ?()=>del(item):()=>remove(item)}>-</span>
                         <span style={{fontSize:22 }}>{item.qnty}</span>
                          <span style={{fontSize:24 }} onClick={()=>handleAdd(item)}>+</span>
                      </div>
                    </td>
                    <td>
                      <p><strong>Rating:</strong><span style={{background:"green",
                      color:"white",padding:"2px 5px",borderRadius:"5px"}}>
                        {item.rating} ★ </span></p>
                      <p><strong>Order Review:</strong>{item.somedata}</p>
                      <p><strong>Remove:</strong><i class="bi bi-trash"
                       style={{color:"red",fontSize:"25px",cursor:"pointer"}}
                       onClick={()=>del(item.id)}></i></p>
                    </td>
                    </tr>
                </Table>
                  
                    </div>
                   </>
                )})}
                    
             
         
        
    </div>
  )
}

export default CardDetails;