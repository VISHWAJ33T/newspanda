import React from 'react'
import loading from './loading.gif'
export default function Spinner() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={loading} className="spinner" alt="Please Wait" />
        <h3>Please Wait</h3>
    </div>
  )
}
