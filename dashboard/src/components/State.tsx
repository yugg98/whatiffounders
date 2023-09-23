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
  const [status,setStatus] = useState(true)
  useEffect(() => {
    setStatus(checkAuth)
    console.log(status)
  }, []);
  return (
   <div>
        {status ?
            <Sidebar children={children} />
        :<Login/>}
    </div>
  );
}
