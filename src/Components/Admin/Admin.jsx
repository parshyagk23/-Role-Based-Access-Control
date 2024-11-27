import React, { useEffect, useState } from 'react'
import styles from './Admin.module.css'
import {  DeleteUserByID, GetAllUser, GetUserByID } from '../../Apis/User'
import AddUser from '../User/AddUser'
const Admin = () => {

  const [userData, setUserData] = useState()
  const [editUser,setEditUser] = useState()
  const [edit,setEdit] = useState(false)
  const fetchUserData = async ()=>{
    try {
      const responce = await GetAllUser();
      setUserData(responce.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchUserData()
  })
  
  const handleEditUser = async (id)=>{
    try {
      const responce = await GetUserByID(id)
      setEditUser(responce?.data)
      setEdit(true)
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteUser = async (id)=>{
    try {
      const responce = await DeleteUserByID(id)
      if(responce){
        alert("User Deleted")
        fetchUserData()
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main>
        <h1  style={{marginTop:'100px'}} >Admin Dashborad</h1>
    <main className={styles.userboard } >
        <table>
          <thead>
          <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          <th>Joinning Date</th>
          <th>Permisstions</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {userData?.map((user)=>(
              <tr key={user?.id} >  
              <td>{user?.id}</td>
            <td>{ user?.FullName }</td>
            <td> {user?.Email} </td>
            <td> {user?.Password} </td>
            <td>{user?.Role}</td>
            <td>{user?.JoiningDate}</td>
            <td>{
              user?.Permissions?.map((p)=>(
                <p key={p} >{p}</p>
              ))
              }

            </td>
            <td  >
              <button onClick={()=>{handleEditUser(user?.id)}} className={styles.edit} >Edit</button>
              <button onClick={()=>handleDeleteUser(user?.id)} className={styles.delete} >Delete</button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
    </main>
    {edit &&<AddUser setEdit={setEdit} editUser={editUser} /> }
    </main>
  )
}

export default Admin