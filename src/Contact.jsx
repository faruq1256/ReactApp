import React, { useEffect, useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fname: "",
        email: "",
        message: ""
    });
  const inputEvent = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(value);

      setData((preVal) => {
        return { 
            ...preVal,
            [name]:value };
      }
          
      );
      console.log(data);

      
  };

  const onSubmitAction = (event) => {
    //   event.preventdefault();
    event.preventDefault();
    alert(`I am ${data.fname} and Email is ${data.email} . My Message is ${data.message}`);
      console.log(data);

  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Page</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 max-auto max_auto">
            <div className="row">
            <form onSubmit={onSubmitAction}>
                <div className="form-group">
                  <label for="">Name</label>
                  <input required
                    type="text"
                    name="fname"
                    onChange={inputEvent}
                    value={data.fname}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input required
                    type="email"
                    name="email"
                    onChange={inputEvent}
                    value={data.email}
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea  required
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    name="message"
                    onChange={inputEvent}
                    value={data.message}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
