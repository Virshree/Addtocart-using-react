/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import {Link} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/Table';
import '../components/style.css';
import {useDispatch, useSelector} from 'react-redux';
import {DEL} from '../setupredux/actions/action';
function Header() {

  const [price,setPrice]=useState(0);
 // console.log(price);
  const getdata=useSelector((state)=>state.cartreducer.carts);
  console.log(getdata);

  const dispatch=useDispatch();
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //add data 
 
  const del=(id)=>{
    dispatch(DEL(id));
  }
 

  const totals=()=>{
    let price=0;
    getdata.map((el)=>{
        price=el.price*el.qnty+price
    });
    setPrice(price);
  };
   useEffect(()=>{
    totals();
  },[totals])
  return (
    <div>
        <Navbar bg="dark" variant="dark" style={{height:"70px"}}>
        <Container>
          <Link to ='/'  style={{textDecoration:"none",color:"white",margin:"20px"}}>Home</Link>
          <Nav className="me-auto">
            <Link to='/cart' style={{textDecoration:"none",color:"white"}}>Add to Cart</Link>
         
          </Nav>
           <Badge badgeContent={getdata.length} color="primary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} >
         <i class="bi bi-cart text-white" style={{fontSize:25,cursor:"pointer"}}></i>
          </Badge>
         
        </Container>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >


        {getdata.length ?(
          <div className="card-details"style={{width:"24rem",padding:"10px"}}>
            <Table>
              <thead>
               <tr>
                  <th>Photo</th>
                  <th>Restaurant</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e)=>{
                    return(
                      <>
                        <tr>
                          <td>
                            <Link to={`/cart/${e.id}`} onClick={handleClose}>
                              <img src={e.imgdata} alt="photo" width="90" height="90"/>
                            </Link>
                          </td>
                          <td>
                            <p><strong>Name:</strong>{e.rname}</p>
                            <p><strong>Price:</strong>₹{e.price *e.qnty}</p>
                            <p><strong>Quantity:</strong>{e.qnty}</p>
                           
                            {/* <p><i className="bi bi-trash small" 
                            style={{color:"red",fontSize:"25px",cursor:"pointer"}}></i></p> */}
                          </td>
                          <td>
                            <i className="bi bi-trash"  onClick={()=>del(e.id)}
                            style={{color:"red",fontSize:"25px",cursor:"pointer"}}></i>
                          </td>
                        </tr>

                      </>
                    )
                }
                )}
                <p className='text-center'>Total:₹{price} </p>
              </tbody>
            </Table>
          </div>
        ):(<div>
           <div className='card-details d-flex justify-content-center align-items-center'
       style={{width:"23rem"}}>
           <i className="bi bi-x" 
           style={{position:"absolute",top:2,right:15,fontSize:28,
           cursor:"pointer"}}
           onClick={handleClose}>
          
           </i>
          <p style={{fontSize:24}}>Your cart is empty</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtygPAsEPS5jmPwuXN7d8fachGcvvomsIqEwvPl8xYxdb_
          vxIAuf6Q3g1WVlYeQDuDTs&usqp=CAU" style={{width:"5rem",padding:"10px"}}/>
         
       </div>
        </div>)}
      
      </Menu> 

      </Navbar>
     
    </div>
  )
}

export default Header