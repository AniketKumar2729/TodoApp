
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useTodos } from '../../utils/TodoProvider';  // Import the context
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

const CalendarScreen = () => {
    const { todos } = useTodos();  
    const [filteredTodos, setFilteredTodos] = useState([]); 
    const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD")); 

    // Filter todos based on selected date
    useEffect(() => {
        const filtered = todos.filter(todo => todo.createdAt === selectedDate && todo.status === "completed");
        setFilteredTodos(filtered);
    }, [selectedDate, todos]);

    return (
        <View className='flex-1 bg-[#f0f0f0] p-5 '>
            {/* Calendar Component */}
            <Calendar 
                onDayPress={(day) => setSelectedDate(day.dateString)}
                markedDates={{ [selectedDate]: { selected: true, selectedColor: "blue" } }}
            />

            {/* Display Completed Todos for Selected Date */}
            <View className='mt-5'>
                {filteredTodos.length > 0 ? (
                    <View>
                        <View  className='flex-row items-center gap-4 mb-4'>
                            <Text>Task Completed</Text>
                            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                        </View>

                        {filteredTodos.map((item) => (
                            <TouchableOpacity key={item._id} className='bg-[#F5F5F5] p-5 rounded-2xl my-3'>
                                <View className='flex-row items-center gap-3'>
                                    <Entypo name="check" size={24} color="green" />
                                    <Text className='flex-1 line-through'>{item.title}</Text>
                                    <Feather name="flag" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <View  className='items-center mt-5' >
                        <Text>No completed tasks for this day</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default CalendarScreen;
