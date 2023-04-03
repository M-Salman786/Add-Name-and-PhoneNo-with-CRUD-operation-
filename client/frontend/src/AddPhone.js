import { useState } from "react";
import { Link } from "react-router-dom";
// Form 2 inputs and button
function AddPhone() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, phone: Number(phone) };
    // setPhone([...phone,payload]);
    fetch("http://localhost:5010/addPhoneNumber", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    }).then(res => res.json()).then(data => console.log(data));
    setName('');setPhone('');
    window.location = '/'
  };
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-sm btn-info mt-2">Save</button>
        <Link to={'/phone-book'} className='btn btn-sm btn-dark ml-3 mt-1' >Go back to List Phone</Link>
      </form>
    </div>
  );
}

export default AddPhone;
