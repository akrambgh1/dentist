import React, { useState } from "react";
import Nav from "./navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password,username,age);
      const user = auth.currentUser;
      if (user) { 
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          username: username,
          age: age,
        });
        
      }
      toast.success("user registered successfully",{position:"top-center",});
      console.log(user);
      console.log("user registered successfully");
      setTimeout(() => {
        navigate("/Profile");
      }, 1000);
      
    } catch (error) {
      console.log("Error creating user with email and password:", error);
      toast.error(error.message,{position:"top-center",});
    }
    
  };



  return (
    <>
      <section className="w-screen h-screen bg-gray-900">
        <Nav />
        <div className="flex flex-col items-center justify-center h-[80%]">
          <h1 className="text-white text-xl text-gray-500 mb-6">Register</h1>
          <form onSubmit={handleRegister} className="flex flex-col items-center ">
            <input
              type="text"
              placeholder="Username"
              className="bg-gray-800 text-white p-2 mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="number"
              placeholder="age"
              className="bg-gray-800 text-white p-2 mb-4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-800 text-white p-2 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-800 text-white p-2 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-gray-800 text-white p-2 cursor-pointer">
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
