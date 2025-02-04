import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screen/StackNavigatorScreen/Login.js'
import Signup from './screen/StackNavigatorScreen/Signup.js'
import BottomNavParent from './components/BottomNavParent.js'
const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="ParentofBottomNav" component={BottomNavParent}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator