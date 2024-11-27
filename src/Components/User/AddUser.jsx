import React, { useState } from 'react'
import styles from './Adduser.module.css'
import { AddNewUser, UpdateUserByID } from '../../Apis/User'
const AddUser = ({setOpenAddUser,editUser,setEdit}) => {
    const [NewUser ,setNewUser] = useState(
        editUser?{
            FullName:editUser?.FullName,
            Email: editUser?.Email,
            Password: editUser?.Password,
            Role: editUser?.Role,
            Permissions: editUser?.Permissions,
            JoiningDate: editUser?.JoiningDate,
        }:{
            FullName:"",
            Email: "",
            Password: "",
            Role: "",
            Permissions: [],
            JoiningDate: "",
        }
    )
    
    const handleOnchange =(e)=>{

        setNewUser( {...NewUser, [e?.target?.name] : e?.target?.value})

    }
    const handleAddUser = async ()=>{
        try {
           if(editUser){
                await UpdateUserByID(editUser?.id,NewUser)
                alert('user detail updated')
                return
           }
           const res = await AddNewUser(NewUser);
           if(res){
               alert("User added successfully")
               setNewUser({FullName:'',
                   Email:'',
                   Password:'',
                   Role:'',
                   JoiningDate:''})
                   setOpenAddUser(false)

           }
        } catch (error) {
            console.log(error)
        }
    }
    const handlePermissionChange = (permission) => (e) => {
        if (e.target.checked) {
          
          setNewUser({
            ...NewUser,
            Permissions: [...NewUser.Permissions, permission],
          });
        } else {
          
          setNewUser({
            ...NewUser,
            Permissions: NewUser.Permissions.filter((perm) => perm !== permission),
          });
        }
      };
  return (
    <main className={styles.users} >
        <h1>Add user</h1>
        <section className={styles.inputs} >
            <div>
                <label htmlFor="">Full Name:</label>
                <input type="text" name='FullName' value={ NewUser?.FullName } onChange={(e)=>{ handleOnchange(e)} } />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" name='Email' value={NewUser?.Email} onChange={(e)=>{  handleOnchange(e)  }}   required/>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" name='Password' value={  NewUser?.Password  }  onChange={(e)=>{ handleOnchange(e)   }} />
            </div>
            <div>
                <label htmlFor="">Role:</label>
                <select name='Role' value={ NewUser?.Role} onChange={(e)=>{handleOnchange(e)}} >
                    <option value='' id=""></option>
                    <option value='Admin' id="">Admin</option>
                    <option value='Senior Developer' id="">SrDeveloper</option>
                    <option value='Junior Developer' id="">jrDeveloper</option>
                    <option value='Tester' id="">Tester</option>
                    <option value='HR' id="">HR</option>
                    <option value='CA' id="">CA</option>
                </select>
            </div>
            <div className={styles.permission} >
                <label htmlFor="">Permissions:</label>
               <div>
                <label htmlFor="">Read</label>
                <input type="checkbox" name="Permissions" id="" 
                checked={  NewUser?.Permissions?.includes('Read')}
                onChange={handlePermissionChange('Read')}
                />
               </div>
               <div>
                <label htmlFor="">Write</label>
                <input type="checkbox" name="Permissions" id="" 
                checked={ NewUser?.Permissions?.includes('Write')}
                onChange={handlePermissionChange('Write')} 
                />
               </div>
               <div>
                <label htmlFor="">Viewer</label>
                <input type="checkbox" name="Permissions" id="" 
                checked={  NewUser?.Permissions?.includes('Viewer')}
                onChange={handlePermissionChange('Viewer')}
                />
               </div>
            </div>
           
            <div>
                <label htmlFor="">Joining Date</label>
                <input type="date" name='JoiningDate' value={ NewUser?.JoiningDate}  onChange={(e)=>{  handleOnchange(e)  }} />
            </div>
        </section>
        <section className={styles.adduserbtn} >
            <div onClick={handleAddUser} > 
                <button> {editUser?'Edit user' :'Add user'}</button>
            </div>
            <div onClick={()=>{
                editUser?setEdit(false):setOpenAddUser(false)
            }} > 
                <button>Cancel</button>
            </div>
        </section>
    </main>
  )
}

export default AddUser