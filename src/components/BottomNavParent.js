import React from 'react'
import BottomNavigator from '../BottomNavigator'
import { TodoProvider } from '../utils/TodoProvider'

const BottomNavParent = () => {
    return (
        <TodoProvider>
            <BottomNavigator />
        </TodoProvider>
    )
}

export default BottomNavParent