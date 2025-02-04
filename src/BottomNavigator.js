import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarScreen from './screen/BottomNavigatorScreen/CalendarScreen';
import HomeScreen from './screen/BottomNavigatorScreen/HomeScreen';
const Tab = createBottomTabNavigator()
const BottomNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => focused ? <Ionicons name="home" size={24} color="blue" /> : <Ionicons name="home" size={24} color="black" /> }} />
            <Tab.Screen name="Calendar" component={CalendarScreen} options={{ tabBarIcon: ({ focused }) => focused ? <Feather name="calendar" size={24} color="blue" /> : <Feather name="calendar" size={24} color="black" /> }} />
        </Tab.Navigator>
    )
}

export default BottomNavigator