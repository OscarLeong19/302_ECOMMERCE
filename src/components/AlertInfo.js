import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components'
export default function AlertInfo({ variant,payload,show,setShow }) {
    console.log(variant,payload);
    return (
        <Div>
            <Alert variant={variant} show={show}onClose={()=>setShow(false)} dismissible className='boostrap-alert' closeLabel='' >{payload}</Alert>
        </Div>
    );
}

const Div = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top : 0;
    z-index: 1;
    button{
        top : 9px;
        border: none;
    }
`