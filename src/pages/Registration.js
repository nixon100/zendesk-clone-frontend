import React from "react";
import "../css/registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Registration = (e) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState("");
  const [error, setError] = useState("");
  const [gender,setGender] = useState("");
  console.log(username)
  console.log(password)
  console.log(email)
  console.log(country)
  console.log(city)
  console.log(phone)
  console.log(batch)
  console.log(gender)

  const handleClick = async (e) => {
    e.preventDefault();
    const form = {
        "username": username,
        "password":password,
        "email" : email,
        "country" : country,
        "city" : city,
        "phone" : phone,
        "batch" :batch,
        "gender" :gender
    
    }
    console.log(form)
    try {
      const res = await axios.post(
        "https://zendesk-clone-backend.onrender.com/api/auth/register",
        form
      );
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      console.log("Wrong password or username!");
    }
  };
  return (
   
    <div className="body">
      <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#" onSubmit={handleClick}>
            <div class="user-details">
            
              <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Enter your username" required onChange={(e)=>setUsername(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required onChange={(e)=>setPhone(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">Batch</span>
                <input type="text" placeholder="Enter your batch" required onChange={(e)=>setBatch(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">City</span>
                <input type="text" placeholder="Enter your city" required onChange={(e)=>setCity(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">Country</span>
                <input type="text" placeholder="Enter your country" required onChange={(e)=>setCountry(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" onClick={()=>setGender("male")} />
              <input type="radio" name="gender" id="dot-2" onClick={()=>setGender("female")}/>
              <input type="radio" name="gender" id="dot-3"  onClick={()=>setGender("prefer not to say")}/>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Register" />
            </div>
            <a href="/login">Login now</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
