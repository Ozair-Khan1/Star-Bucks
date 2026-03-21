import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "./utils/api";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkUserStatus = async () => {
        try {
            const session = await api.get('/check-auth')
            setUser(session)

        } catch (error) {
            console.log(error)
            setUser(null)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkUserStatus()
    }, []);

    const logout = async () => {
        try {
            await api.post('/logout')
            setUser(null)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <AuthContext.Provider value={{user, setUser, checkUserStatus, loading, logout}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)