//? config de navegacao entre telas[INSERIR ARQUIVOS DO FRONTEND AQUI]
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import ListTask from "./listTask";

export default function Routes() {
    const Stack = createNativeStackNavigator();

    {/* HeaderShown tira o nome das telas no Header */}

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}> 
                <Stack.Screen name="Home" component={Home}/>
                
                <Stack.Screen name="Historico" component={ListTask}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}