import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import ProfileNavbar from './ProfileNavbar'

function ProfileDetails() {
  return (
    <div className='h-full md:w-[80%]  lg:w-[85%] flex '>
        <ProfileSidebar/>
        <ProfileNavbar/>
    </div>
  )
}

export default ProfileDetails

