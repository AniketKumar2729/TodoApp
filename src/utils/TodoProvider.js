import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a Context for Todos
const TodoContext = createContext();

// Create a Provider for TodoContext
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    // Fetch todos from AsyncStorage
    useEffect(() => {
        const getTodos = async () => {
            try {
                const storedData = await AsyncStorage.getItem('todos');
                if (storedData !== null) {
                    setTodos(JSON.parse(storedData));
                }
            } catch (error) {
                console.log('Error fetching todos:', error);
            }
        };
        getTodos();
    }, []);

    // Store todos in AsyncStorage
    const storeTodos = async (todos) => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.log('Error storing todos:', error);
        }
    };

    // Add or Update Todo
    const updateTodos = (updatedTodos) => {
        setTodos(updatedTodos);
        storeTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, updateTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

// Custom hook to access the TodoContext
export const useTodos = () => useContext(TodoContext);
