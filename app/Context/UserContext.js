"use client";

import { createContext, useEffect, useState, } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  if (typeof window !== "undefined") {
    useEffect(() => {
      localStorage.setItem("UserDetails", JSON.stringify(user));
    }, [user]);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getLocalData = () => {
        let userData = localStorage.getItem("UserDetails");
        if (userData == {}) {
          return {};
        } else {
          return JSON.parse(userData);
        }
      };
      setUser(getLocalData())
    }
  },[])
    

  
    
     return (
         <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
     );
};