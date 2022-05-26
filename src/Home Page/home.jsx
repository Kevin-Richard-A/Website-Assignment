import React from 'react'
import { ModalBody, Button } from 'react-bootstrap'


function Home() {

    return (
        <>
            <ModalBody>
                <center>
                    <h1 style={{color:'whitesmoke'}}>This My Home Page</h1>
                    <Button variant="warning" href='/login'>Login</Button>
                </center>
            </ModalBody>
        </>
    )
}

export default Home