import axios from "axios";

export const  AddNewUser = async(NewUser)=>{

    try {
        const responce = await axios.post('http://localhost:5000/users',NewUser)
        return responce;
    } catch (error) {
        console.log(error)
    }
}
export const  GetAllUser = async()=>{

    try {
        const responce = await axios.get('http://localhost:5000/users')
    return responce;
    } catch (error) {
        console.log(error)
    } 
}
export const  GetUserByID = async(id)=>{

    try {
        
        const responce = await axios.get(`http://localhost:5000/users/${id}`)
      
        return responce;
    } catch (error) {
        console.log(error)
    } 
}
export const  DeleteUserByID = async(id)=>{

    try {
        
        const responce = await axios.delete(`http://localhost:5000/users/${id}`)
        return responce;
    } catch (error) {
        console.log(error)
    } 
}
export const  UpdateUserByID = async(id, user)=>{

    try {
        
        const responce = await axios.put(`http://localhost:5000/users/${id}`,user)
        return responce;
    } catch (error) {
        console.log(error)
    } 
}
