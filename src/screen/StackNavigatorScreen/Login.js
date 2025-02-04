import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import { Button, TextInput as PaperInput } from 'react-native-paper'
import authServices from '../../config/appwrite/auth.appwrite'
import Toast from 'react-native-toast-message'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    // const handleLogin=()=>navigation.navigate("ParentofBottomNav")
    const handleLogin = async () => {
        try {
            const response = await authServices.Login({ email, password })
            console.log(" Login response :- ", response)
            if(response?.success){
                Toast.show({type:"success",text1:`Welcome Back!`})
                navigation.navigate("ParentofBottomNav")
            }
            if(response?.success===false){
                Toast.show({type:'error',text1:"Invalid credentials"})
            }
        } catch (error) {
            console.log("error came in signup :- ", error)
        }
    }
    const handleDetails = async () => {
        try {
            const response = await authServices.getCurrentUser({ email, password })
            console.log(" getCurrentUser response :- ", response)
        } catch (error) {
            console.log("error came in geting user detials :- ", error)
        }
    }
    const handleLogout = async () => {
        try {
            const response = await authServices.Logout()
            console.log(" Logout response :- ", response?.message)
        } catch (error) {
            console.log("error came in logout :- ", error)
        }
    }
    return (
        <View className='flex-1 bg-white items-center'>
            <View className='mt-20'>
                <Text className='text-2xl font-semibold text-blue-500'>Todo Tracker</Text>
            </View>
            <KeyboardAvoidingView behavior="padding">
                <View className='items-center'>
                    <Text className='text-lg font-semibold mt-5'>Login in to Your Account</Text>
                </View>
                <View className='mt-5'>
                    <View className='flex-row items-center gap-2 py-0.5 rounded-xl mt-4' style={{ backgroundColor: "#F5F5F5" }}>
                        <PaperInput
                            label="Enter Email"
                            value={email}
                            onChangeText={setEmail}
                            mode="outlined"
                            style={{ fontSize: 17, width: "96%" }}
                            left={<PaperInput.Icon icon='email' />}
                        />
                    </View>
                    <View className='flex-row items-center gap-2 py-0.5 rounded-xl mt-4' style={{ backgroundColor: "#F5F5F5" }}>
                        <PaperInput
                            label="Enter Password"
                            className='w-72'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={showPassword}
                            mode="outlined"
                            style={{ fontSize: 17 }}
                            left={<PaperInput.Icon icon='form-textbox-password' />}
                            right={<PaperInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
                        />
                    </View>
                    <View className='mt-14'>
                        <Button
                            mode="contained"
                            className="p-6 rounded-lg w-52 ml-auto mr-auto"
                            onPress={handleLogin}
                            style={{ backgroundColor: "#2973B2" }}
                        >
                            Login
                        </Button>
                        {/* <Button
                            mode="contained"
                            className="p-6 rounded-lg w-52 ml-auto mr-auto mt-2"
                            onPress={handleDetails}
                            style={{ backgroundColor: "#2973B2" }}
                        >
                            Get User details
                        </Button>
                        <Button
                            mode="contained"
                            className="p-6 rounded-lg w-52 ml-auto mr-auto mt-2"
                            onPress={handleLogout}
                            style={{ backgroundColor: "#2973B2" }}
                        >
                            Logout
                        </Button> */}
                        <Text className='text-center text-lg text-gray-600 mt-1'>
                            Don't have an account?
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                <Text className='text-blue-600 font-bold text-center'> Signup</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login
