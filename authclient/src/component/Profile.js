import React from 'react'
import {useSelector} from 'react-redux';

const Profile = () => {
  const {currentUser} = useSelector(state=>state.user);
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Profile
      </h1>
      <form className='flex flex-col'>
        <img 
        src={currentUser.profilePicture}
        alt='profile'
        />
      </form>
    </div>
  )
}

export default Profile