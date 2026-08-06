import { createContext } from "react";

export const UserContext = createContext();

const user = {
    firstName: "Muhammad",
    lastName: "Zackerian",
    age: 30,
};

export function UserProvider({ children }) {

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}