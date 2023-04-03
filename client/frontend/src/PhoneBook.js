import React from 'react'
import { Link } from 'react-router-dom'
import AddPhone from './AddPhone'
import ListPhone from './ListPhone'
// TO Display Phone Numbers with details
function PhoneBook() {
  return (
    <div>
        {/* <AddPhone /> */}
        <Link to={'/add-phone'} className="btn btn-success mb-5 mt-5" >Add New Contact</Link>
        <ListPhone />
    </div>

  )
}

export default PhoneBook