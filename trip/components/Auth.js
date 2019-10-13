import {AsyncStorage} from "react-native";
export const  signin =(d)=>AsyncStorage.setItem("user",d)
export const  signOut =(d)=>AsyncStorage.setItem("user",null)

export const isSigned=async()=>{
    v= await AsyncStorage.getItem('user')
    return v
}