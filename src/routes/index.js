import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator } from "react-native";
import { View } from "react-native-web";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.auth";

export default function Routes(){

    const { signed, loading } = useAuth();

    if(loading){
        return (
            <View 
                style={{
                    flex: 1, 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    return(
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}