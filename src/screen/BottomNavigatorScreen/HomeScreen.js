// import React, { useState, useEffect } from 'react';
// import { ScrollView, Text, View, Image , TextInput as Input } from 'react-native';
// import { Button, TextInput, Dialog, Portal, Checkbox, List } from 'react-native-paper';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Feather from 'react-native-vector-icons/Feather';
// import moment from 'moment';
// import { useTodos } from '../../utils/TodoProvider';  
// import Toast from 'react-native-toast-message';
// import authServices from '../../config/appwrite/auth.appwrite';

// const HomeScreen = ({ navigation }) => {
//   const { todos, updateTodos } = useTodos();  
//   const [isVisible, setIsVisible] = useState(false); 
//   const [todo, setTodo] = useState({
//     title: "",
//     category: "",
//     status: "pending",
//   });
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Add new todo to the list
//   const handleAddTodo = () => {
//     if (!todo.title.trim() || !todo.category.trim()) {
//       alert("Please enter a title and select a category.");
//       return;
//     }

//     const newTodo = {
//       _id: Date.now().toString(),
//       title: todo.title,
//       category: todo.category,
//       status: "pending",
//       createdAt: moment().format('YYYY-MM-DD'),
//     };

//     updateTodos([...todos, newTodo]); 
//     setTodo({ title: "", category: "", status: "pending" });
//     setIsVisible(false);
//   };


//   const toggleTodoStatus = (id) => {
//     const updatedTodos = todos.map((item) =>
//       item._id === id
//         ? { ...item, status: item.status === "pending" ? "completed" : "pending" }
//         : item
//     );

//     updateTodos(updatedTodos);  
//   };


//   const filterTodosByCategory = (category) => {
//     setSelectedCategory(category);
//     if (category === "All") {
//       updateTodos(todos);
//     } else {
//       const filtered = todos.filter(todo => todo.category === category);
//       updateTodos(filtered);
//     }
//   };
//   const handleLogout = async () => {
//         try {
//             const response = await authServices.Logout()
//             console.log(" Logout response :- ", response?.message)
//             Toast.show({type:"success",text1:"User Logout"})
//             navigation.navigate("Login")
//         } catch (error) {
//             console.log("error came in logout :- ", error)
//         }
//     }
//   return (
//     <>
//       {/* Header */}
//       <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
//         {/* Category Buttons */}
//         <ScrollView horizontal={true} contentContainerStyle={{ gap: 12 }}>
//           <View style={{ flexDirection: 'row' }}>
//             <Button mode="contained" buttonColor="green" onPress={() => filterTodosByCategory("All")}>
//               All
//             </Button>
//             <Button mode="contained" buttonColor="green" onPress={() => filterTodosByCategory("Work")}>
//               Work
//             </Button>
//             <Button mode="contained" buttonColor="green" onPress={() => filterTodosByCategory("Personal")}>
//               Personal
//             </Button>
//           </View>
//           {/* Add Todo Button */}
//           <Button icon="plus-circle" mode="outlined" onPress={() => setIsVisible(true)}>
//             Add Todo
//           </Button>
//           <Button mode="outlined" icon="logout" onPress={handleLogout}>Logout</Button>
//         </ScrollView>
//       </View>

//       {/* Todo List */}
//       <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={{ padding: 10 }}>
//           {todos.length > 0 ? (
//             <View>
//               <Text>Task to do!</Text>
//               {todos.map((item) => (
//                 <Button
//                   key={item._id}
//                   mode="outlined"
//                   onPress={() => toggleTodoStatus(item._id)}
//                   style={{
//                     marginVertical: 8,
//                     backgroundColor: item.status === "completed" ? "#D3F9D8" : "white",
//                   }}
//                 >
//                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <Entypo
//                       name={item.status === "completed" ? "check" : "circle"}
//                       size={24}
//                       color={item.status === "completed" ? "green" : "black"}
//                     />
//                     <Text
//                       style={{
//                         flex: 1,
//                         marginLeft: 10,
//                         textDecorationLine: item.status === "completed" ? "line-through" : "none",
//                       }}
//                     >
//                       {item?.title}
//                     </Text>
//                     <Feather name="flag" size={24} color="black" />
//                   </View>
//                 </Button>
//               ))}
//             </View>
//           ) : (
//             <View style={{ alignItems: 'center', marginTop: "20%" }}>
//               <Image
//                 source={{ uri: "https://cdn-icons-png.flaticon.com/256/7590/7590241.png" }}
//                 style={{ width: 200, height: 200 }}
//               />
//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
//                 No Task for today! Add a Task
//               </Text>
//               <Button icon="plus-circle" mode="outlined" onPress={() => setIsVisible(true)} style={{ marginTop: 20 }}>
//                 Add Todo
//               </Button>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//         <Dialog visible={isVisible} onDismiss={() => setIsVisible(false)}>
//           <Dialog.Title>Add New Task</Dialog.Title>
//           <Dialog.Content>
//           {/* <Input className='border-2 border-blue-400 rounded-3xl'  value={todo.title} onChangeText={(text) => setTodo((prevTodo) => ({ ...prevTodo, title: text }))} placeholder='Enter your Todo'/> */}
//             <TextInput
//               label="Task Title"
//               value={todo.title}
//               onChangeText={(text) => setTodo((prevTodo) => ({ ...prevTodo, title: text }))}
//               style={{ marginBottom: 20 }}
//             />

//             {/* Task Category (Checkbox Selection) */}
//             <View style={{ padding: 10 }}>
//               <Text>Task Category</Text>
//               <List.Item
//                 title="Work"
//                 left={() => (
//                   <Checkbox
//                     status={todo.category === 'Work' ? 'checked' : 'unchecked'}
//                     onPress={() => setTodo((prevTodo) => ({ ...prevTodo, category: "Work" }))}
//                   />
//                 )}
//               />
//               <List.Item
//                 title="Personal"
//                 left={() => (
//                   <Checkbox
//                     status={todo.category === 'Personal' ? 'checked' : 'unchecked'}
//                     onPress={() => setTodo((prevTodo) => ({ ...prevTodo, category: "Personal" }))}
//                   />
//                 )}
//               />
//               <List.Item
//                 title="Wishlist"
//                 left={() => (
//                   <Checkbox
//                     status={todo.category === 'Wishlist' ? 'checked' : 'unchecked'}
//                     onPress={() => setTodo((prevTodo) => ({ ...prevTodo, category: "Wishlist" }))}
//                   />
//                 )}
//               />
//             </View>
//           </Dialog.Content>
//           <Dialog.Actions>
//             <Button onPress={() => setIsVisible(false)}>Cancel</Button>
//             <Button onPress={handleAddTodo}>Add</Button>
//           </Dialog.Actions>
//         </Dialog>
//     </>
//   );
// };

// export default HomeScreen;


import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Button, TextInput, Dialog, Portal, Checkbox, List } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import { useTodos } from '../../utils/TodoProvider';
import Toast from 'react-native-toast-message';
import authServices from '../../config/appwrite/auth.appwrite';

const HomeScreen = ({ navigation }) => {
  const { todos, updateTodos } = useTodos();
  const [allTodos, setAllTodos] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    category: "",
    status: "pending",
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setAllTodos(todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (!todo.title.trim() || !todo.category.trim()) {
      alert("Please enter a title and select a category.");
      return;
    }

    const newTodo = {
      _id: Date.now().toString(),
      title: todo.title,
      category: todo.category,
      status: "pending",
      createdAt: moment().format('YYYY-MM-DD'),
    };

    const updatedTodos = [...allTodos, newTodo];
    setAllTodos(updatedTodos);
    updateTodos(updatedTodos);

    setTodo({ title: "", category: "", status: "pending" });
    setIsVisible(false);
  };

  // Toggle the status of a todo (pending -> completed, or vice versa)
  const toggleTodoStatus = (id) => {
    const updatedTodos = allTodos.map((item) =>
      item._id === id
        ? { ...item, status: item.status === "pending" ? "completed" : "pending" }
        : item
    );

    setAllTodos(updatedTodos);
    updateTodos(updatedTodos);
  };


  const filterTodosByCategory = (category) => {
    setSelectedCategory(category);

    if (category === "All") {

      setAllTodos(todos);
    } else {

      const filtered = todos.filter(todo => todo.category === category);
      setAllTodos(filtered);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await authServices.Logout();
      console.log("Logout response: ", response?.message);
      Toast.show({ type: "success", text1: "User Logout",text2:'Bye Bye!' });
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error in logout: ", error);
    }
  };

  return (
    <>
      {/* Header */}
      <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        {/* Category Buttons */}
        <ScrollView horizontal={true} contentContainerStyle={{ gap: 12 }}>
          <View style={{ flexDirection: 'row' }}>
            <Button mode="contained" buttonColor="green" onPress={() => filterTodosByCategory("All")}>
              All
            </Button>
            <Button mode="contained" buttonColor="green" onPress={() => filterTodosByCategory("Work")}>
              Work
            </Button>
            <Button mode="contained" buttonColor="green" onPress={() => filterTodosByCategory("Personal")}>
              Personal
            </Button>
          </View>
          {/* Add Todo Button */}
          <Button icon="plus-circle" mode="outlined" onPress={() => setIsVisible(true)}>
            Add Todo
          </Button>
          <Button mode="outlined" icon="logout" onPress={handleLogout}>Logout</Button>
        </ScrollView>
      </View>

      {/* Todo List */}
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ padding: 10 }}>
          {allTodos.length > 0 ? (
            <View>
              <Text>Task to do!</Text>
              {allTodos.map((item) => (
                <Button
                  key={item._id}
                  mode="outlined"
                  onPress={() => toggleTodoStatus(item._id)}
                  style={{
                    marginVertical: 8,
                    backgroundColor: item.status === "completed" ? "#D3F9D8" : "white",
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo
                      name={item.status === "completed" ? "check" : "circle"}
                      size={24}
                      color={item.status === "completed" ? "green" : "black"}
                    />
                    <Text
                      style={{
                        flex: 1,
                        marginLeft: 10,
                        textDecorationLine: item.status === "completed" ? "line-through" : "none",
                      }}
                    >
                      {item?.title}
                    </Text>
                    <Feather name="flag" size={24} color="black" />
                  </View>
                </Button>
              ))}
            </View>
          ) : (
            <View style={{ alignItems: 'center', marginTop: "20%" }}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/256/7590/7590241.png" }}
                style={{ width: 200, height: 200 }}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                No Task for today! Add a Task
              </Text>
              <Button icon="plus-circle" mode="outlined" onPress={() => setIsVisible(true)} style={{ marginTop: 20 }}>
                Add Todo
              </Button>
            </View>
          )}
        </View>
      </ScrollView>

      <Dialog visible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Dialog.Title>Add New Task</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Task Title"
            value={todo.title}
            onChangeText={(text) => setTodo((prevTodo) => ({ ...prevTodo, title: text }))}
            style={{ marginBottom: 20 }}
          />

          {/* Task Category (Checkbox Selection) */}
          <View style={{ padding: 10 }}>
            <Text>Task Category</Text>
            <List.Item
              title="Work"
              left={() => (
                <Checkbox
                  status={todo.category === 'Work' ? 'checked' : 'unchecked'}
                  onPress={() => setTodo((prevTodo) => ({ ...prevTodo, category: "Work" }))}
                />
              )}
            />
            <List.Item
              title="Personal"
              left={() => (
                <Checkbox
                  status={todo.category === 'Personal' ? 'checked' : 'unchecked'}
                  onPress={() => setTodo((prevTodo) => ({ ...prevTodo, category: "Personal" }))}
                />
              )}
            />
            <List.Item
              title="Wishlist"
              left={() => (
                <Checkbox
                  status={todo.category === 'Wishlist' ? 'checked' : 'unchecked'}
                  onPress={() => setTodo((prevTodo) => ({ ...prevTodo, category: "Wishlist" }))}
                />
              )}
            />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setIsVisible(false)}>Cancel</Button>
          <Button onPress={handleAddTodo}>Add</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

export default HomeScreen;



