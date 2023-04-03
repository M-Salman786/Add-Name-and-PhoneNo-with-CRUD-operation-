import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Form 2 inputs and button
function UpdatePhone() {
  const params = useParams()
  const [details,setDetails] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const fetchData = async ()=>{
  //   const response = await fetch(`http://localhost:5000/get-phone/${params._id}`);
  //   const data = response.json();
  //   setFields(data);
  // }

    useEffect(()=>{
      // fetchData();
        fetch(`http://localhost:5000/get-phone/${params._id}`).then((res)=>res.json()).then((data)=>setFields(data))
    },[])

    const setFields = (data)=>{
        setName(data.name)
        setPhone(data.phone);
        setDetails(data);        
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, phone: Number(phone) };
    setPhone([...phone,payload]);
    fetch(`http://localhost:5000/update-phone/${params._id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    }).then(res => res.json()).then(data => console.log(data));
    setName('');setPhone('');
    window.location = '/'
  };
  return (
    <div>
      <form method="patch" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <label className="form-label">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-sm btn-info mt-2">Update</button>
        <Link to={'/'} className='btn btn-sm btn-dark ml-3 mt-1' >Go back to List Phone</Link>
      </form>
    </div>
  );
}

export default UpdatePhone;
