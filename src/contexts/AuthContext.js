import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

    export function useAuth(){
        const context = useContext(AuthContext);
        return context;
    }

    export function AuthProvider({ children }){

        const [signed, setSigned] = useState(false);
        const [loading, setLoading] = useState(false)

        function signIn(){
            return new Promise(resolve => {
                setLoading(true);
                setTimeout(function(){
                    setSigned(true);
                    setLoading(false);
                }, 1000)
            })
        }

        return (
            <AuthContext.Provider value = {{ signed, signIn, loading }}>
                { children }
            </AuthContext.Provider>
        )
    }

export default AuthContext;