import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("user Login successfully", { position: "top-center", });
      setTimeout(() => {
        navigate("/Profile");
      }, 1000);
      
      
    } catch (error) {
      console.error("Error signing in with email and password:", error);
      toast.error(error.message,{position:"top-center",});
    }
  };

const handleGRegister = async (e) => {
    e.preventDefault();
    try {
      
    const provider = new GoogleAuthProvider();
      
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result)
      await setDoc(doc(db, "users", result.user.uid), {
        email: result.user.email,
        Lastname: result._tokenResponse.lastName,
        Firstname: result._tokenResponse.firstName,
        photo: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
        
      });
    })
       
        toast.success("user registered successfully",{position:"top-center",});
      setTimeout(() => {
        navigate("/Profile");
      }, 1000);
      }
      
      
     catch (error) {
      toast.error(error.message,{position:"top-center",});
    }
    
  };

  
  return (
    <>
      <section className="w-screen h-screen bg-gray-900">
        <Nav />
        <div className="flex flex-col items-center justify-center h-[80%]">
          <h1 className="text-white text-xl text-gray-500 mb-6">Login</h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-[15rem] items-center">
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="bg-gray-800 text-white p-2 w-[100%] mb-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-800 text-white p-2 w-[100%] mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-gray-800 text-white p-2">Login</button>
          </form>
          <button onClick={handleGRegister} className="bg-gray-800 text-white p-2 mt-4 cursor-pointer">
            Register with Google</button>
        </div>
      </section>
    </>
  );
}
