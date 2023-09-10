"use client";

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getLocalData = () => {
      let userData = localStorage.getItem("UserDetails");
      if (userData == {}) {
        return {};
      } else {
        return JSON.parse(userData);
      }
    };
    setUser(getLocalData());
  }, []);

  useEffect(() => {
    localStorage.setItem("UserDetails", JSON.stringify(user));
  }, [user]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}
