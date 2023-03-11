import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setuser] = useState();
  const [ready, setready] = useState(false);
  useEffect(() => {
    if (!user) {
      axios
        .get("https://bookit-wrul.onrender.com/profile", { withCredentials: true })
        .then(({ data }) => {
          setuser(data);
          setready(true);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setuser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
