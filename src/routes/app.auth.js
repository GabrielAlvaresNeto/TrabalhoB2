import { createStackNavigator } from "@react-navigation/stack";
import CatalogoFilmes from "../pages/CatalogoFilmes";
import ComprarFilme from "../pages/ComprarFilme";
import DetailFilme from "../pages/DetailFilme";
import Dashboard from "../pages/Dashboard";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
      <Stack.Navigator initialRouteName="Catálogo de Filmes">
        <Stack.Screen name="Catálogo de Filmes" component={CatalogoFilmes} ></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard} ></Stack.Screen>
        <Stack.Screen name="Detalhes do Filme" component={DetailFilme} ></Stack.Screen>
        <Stack.Screen name="Comprar Filme" component={ComprarFilme} ></Stack.Screen>
      </Stack.Navigator>
    )
}