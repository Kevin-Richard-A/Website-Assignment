import React from 'react'
import { ModalBody } from 'react-bootstrap'

export default function Front() {
  return (
    <ModalBody class="bg-danger">
        <center>
            <h2 style={{color:'whitesmoke'}}>This is main content Page</h2><br/>
            <div class="card-body bg-danger mb-3">
            <h5 class="card-title bg-warning mb-3"> What is Frontend?</h5>
            <p class="card-text bg-danger mb-3" style={{color:'whitesmoke'}}>Frontend The frontend of a software program or website is everything with which the user interacts.
             From a user standpoint, the frontend is synonymous with the user interface. From a developer standpoint, it is the interface design and the programming that makes the interface function.</p>
            <h4>:-)</h4>
            </div>
        </center>
    </ModalBody>
  )
}
