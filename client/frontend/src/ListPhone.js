import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListPhone() {
  const [phone, setPhone] = useState([]);
  const fetchData = async () => {
    const data = await fetch("http://localhost:5010/phoneNumbers");
    const result = await data.json();
    setPhone(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = _id =>{
    fetch(`http://localhost:5010/delete-phone/${_id}`,
      {method:'Delete'})
      .then((res)=>res.json())
      .then((data)=>console.log(data))
      .then(setPhone(phone => phone.filter(p => p._id !== _id)))
  }

  return (
    <div>
      <table border={1} className="table" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {phone.map(p=>
                 <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.phone}</td>
                    <td>
                      <Link to={`update-phone/${p._id}`} className = 'btn btn-sm btn-warning mr-2'>Edit</Link>
                      <button onClick={()=> deleteData(p._id)} className = 'btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr>
            )}
          
        </tbody>
      </table>
    </div>
  );
}

export default ListPhone;
