"use client";

import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import api from "./lib/api";

type User = {
  id:number;
  name:string;
  email:string;
}

function Home(){
  const [use,setUse] = useState<User[]>([])
  const [load,setLoad] = useState(true)
  const [err,setErr] = useState("") 

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get("/users");

        setUse(response.data)

      } catch (error) {
        setErr("something wrong")
      }finally{
        setLoad(false)
      }
    
    }

    getUsers();
  },[])

  if(load) return <h1>Loading....</h1>
  if(err) return <h1>{err}</h1>

  return(
    <div>
      <h1>Users</h1>

      {use.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}

    </div>
  )
}

export default Home;