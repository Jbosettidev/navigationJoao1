import React from "react";
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";

//! tela historico links

export default function ListTask() {
    const navigation = useNavigation();

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Segunda Pagina</Text>
        </View>
    )
}
