import { createContext } from "react"


export const AuthContext = createContext({
    isAuthenticated: true,
    setIsAuthenticated: (isAuthenticated: boolean) => {}
});

