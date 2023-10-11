import { Spinner } from "react-bootstrap";

import React from 'react'

const Loader = () => {
  return (
    <Spinner
        animation="grow"
        role="status"
        style={{
            margin: 'auto',
            display: 'block'
        }}
    >

    </Spinner>
  )
}

export default Loader