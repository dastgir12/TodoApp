// import React , {useState} from 'react'
// import { View, Text , TextInput, Button,  StyleSheet } from 'react-native'
// import {Feather} from '@expo/vector-icons'

// const Todo = () => {
//     const [mytodo , setTodo] = useState("")
//     const ItemList =()=>
//     {
//          return(
//              <View style={styles.list}>
//                  <Text style={{fontSize:20}}>item 1</Text>
//                  <Feather name='delete' size={30} color="#ff4081"/>
//              </View>
//          )
//     }
//   return (
//     <View style={styles.con}>
//       <TextInput 
//       placeholder='Write todo'
//       style={styles.textInput}
//       onChangeText={text=>setTodo(text)}
//       value={mytodo}
//       />
//       <Button 
//       title='Add todo'
//       color="#ff4081"
//       style={styles.button}
//       onPress={()=>{}}
//       />
//       <ItemList />
//       <ItemList />
//       <ItemList />

//     </View>
//   )
// }
// const styles = StyleSheet.create(
//     {
//         con: {
           
//             marginHorizontal: 20
//         },
//         text:
//         {
//             fontSize: 24,
//             textAlign: "center"
//         },
//         list:
//         {
//  padding:15, 
//  borderBottomColor:"grey",
//  borderBottomWidth:1,
//  flexDirection:'row',
//  justifyContent:"space-between"
//         },
//         textInput:
//         {
//             height: 50,
//             borderColor: "#ff4081",
//             borderWidth: 2,
//             marginVertical:50
//         }
//     }
// )

// export default Todo