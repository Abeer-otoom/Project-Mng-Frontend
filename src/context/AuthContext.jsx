import { createContext, useContext, useState, useEffect } from "react";

//Create context
const AuthContext = createContext();

//Provide context wrapper
export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

    //Sync  change to localStorege whenever token/user change

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
        }
        else {
            localStorage.removeItem("token");
        }

        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
        }
        else {
            localStorage.removeItem("user");
        }
    }, [token, user]);


    const login = (token, user) => {
        setToken(token);
        setUser(user);


    }

    const logout = () => {
        setToken(null);
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}


// custom hook for easier usage
export function useAuth()
{
    return useContext(AuthContext);
}