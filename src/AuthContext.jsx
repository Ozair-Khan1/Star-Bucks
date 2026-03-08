import { createContext, useContext, useEffect, useState } from "react";
import { account } from "./appwrite";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkUserStatus = async () => {
        try {
            const session = await account.get();
            setUser(session)

        } catch (error) {
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
            await account.deleteSession('current');
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