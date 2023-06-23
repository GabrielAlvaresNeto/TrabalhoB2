import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RecuperationPage from "../pages/RecuperationPage";

const Stack = createStackNavigator();

export default function AuthRoutes(){
    return(
      <Stack.Navigator initialRouteName="Tela de Login">
        <Stack.Screen name="Tela de Login" component={LoginPage} options={{ headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Tela de Registro" component={RegisterPage} options={{ headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Tela de Recuperacao" component={RecuperationPage} options={{ headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    )
}