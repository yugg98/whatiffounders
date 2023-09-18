"use client"
import { useEffect, useState } from "react";
import { checkAuth } from "../app/auth";
import Login from "@/components/Login";
import Sidebar from "./Sidebar";

export default function State({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status,setStatus] = useState(false)
  useEffect(() => {
    const token =  localStorage.getItem("token")
    setStatus(checkAuth(token))
    console.log(status)
  }, []);
  return (
   <div>
        {status==true ?
            <Sidebar children={children} />
        : <Login/>}
    </div>
  );
}
