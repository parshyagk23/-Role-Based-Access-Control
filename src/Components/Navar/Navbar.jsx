import React, { useState } from 'react'
import styles from './Navbar.module.css'
import AddUser from '../User/AddUser'

const Navbar = () => {
  const [OpenAddUser , setOpenAddUser]  = useState(false)
  const handleOpenAddUser = ()=>{
    setOpenAddUser((prev)=>!prev)
  }
  return (
    <>
    <main className={styles.navcontainer} >
        <div className={styles.appname} >
            <h1>Admin Dashboard</h1>

        </div>
        <section className= {styles.navdetails}>

        <div onClick={handleOpenAddUser} >
            <button>
                Add user
            </button>
        </div>
        
        </section>
    </main>
    
    {OpenAddUser && <AddUser setOpenAddUser={setOpenAddUser} />}
    </>
  )
}

export default Navbar