// import React, { useState } from 'react'
// import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'



// const Auth = () => {
//     const [email, setEmail] = useState("")
//     const [password, setpassword] = useState("")
//     const [Auth, setAuth] = useState("signin")
//     return (
//         <View style={styles.con}>
//             <Text style={styles.text}>please {Auth}</Text>
//             <TextInput
//                 keyboardType="email-adress"
//                 placeholder='email'
//                 value={email}
//                 style={styles.textInput}
//                 onChangeText={text => setEmail(text)}
//             />
//             <TextInput
//                 secureTextEntry
//                 placeholder='password'
//                 value={password}
//                 style={styles.textInput}
//                 onChangeText={text => setpassword(text)}
//             />
//             {
//                 Auth ==="signin" ?

//                     <TouchableOpacity onPress={() => setAuth("signup")}><Text style={{ textAlign: "center" , fontSize:20}}>Don't have an Account ?</Text></TouchableOpacity>
//                     : <TouchableOpacity onPress={() => setAuth("signin")}><Text style={{ textAlign: "center" , fontSize:20 }}>Already have an Account ?</Text></TouchableOpacity>

//             }
//             <Button
//                 title={Auth}
//                 color="#ff4081"
//                 onPress={() => console.log(email, password)}
//             />

//         </View>
//     )
// }
// const styles = StyleSheet.create(
//     {
//         con: {
//             height: "50%",
//             justifyContent: "space-around",
//             marginHorizontal: 20
//         },
//         text:
//         {
//             fontSize: 24,
//             textAlign: "center"
//         },
//         textInput:
//         {
//             height: 50,
//             borderColor: "#ff4081",
//             borderWidth: 2
//         }

//     }
// )
// export default Auth