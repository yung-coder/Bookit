import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setuser] = useState();
  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:3000/profile", { withCredentials: true })
        .then(({ data }) => {
          setuser(data);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
}
