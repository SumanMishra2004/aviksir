

'use client'

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import {signInWithGoogle} from '@/firebaseConfig/auth/Signup'
import { getAuth } from "firebase/auth";

const auth = getAuth();
const Navbar = () => {
  const user = auth.currentUser

  const NavItems = [
    {
      "name": "Home",
      "icon": "",
      "link": "/"
    },
    {
      "name": "About us",
      "icon": "",
      "link": "/about"
    },
    {
      "name": "Blog",
      "icon": "",
      "link": "/blog"
    },
    {
      "name": "Contact us",
      "icon": "",
      "link": "/"
    },

  ]
const [userImage, setUserImage] = useState('')
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.get('/api/auth/google');
  //     console.log('User signed in with Google successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error signing in with Google:', error);
  //   }
  // };
  const handleLogin = async () => {
    try {
      const image = await signInWithGoogle();
      setUserImage(image as string);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between items-center p-4 z-[999] sticky top-0 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40 border-b-2 border-gray-100'>
      <div className='flex justify-between w-full md:w-auto'>
        <div className='text-2xl font-bold'>Brand</div>
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          <span className='text-2xl'>☰</span>
        </button>
      </div>
      <div className={`w-full md:flex md:w-auto items-center gap-10 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='w-auto flex flex-col md:flex-row md:gap-9 gap-3 justify-center items-center'>
          {
            NavItems.map((value, index) => (
              <Link href={value.link} key={index} className='text-md text-black font-semibold flex gap-2'>
                {value.name}
                <ChevronDown />
              </Link>
            ))
          }
        </div>
        {
          user ? (
            <div className='flex items-center'>
              <img src={userImage} alt="User" className='w-10 h-10 rounded-full' />
            </div>
          ) : (
            <div className='flex flex-col md:flex-row w-auto h-fit gap-3 mt-4 md:mt-0'>
              <Button variant={'outline'} className='shadow-xl shadow-blue-200 py-5 border border-black text-xl font-medium rounded-xl' onClick={handleLogin} >Login</Button>
              <Button variant={'outline'} className='bg-blue-300 py-5 border border-black rounded-xl shadow-xl shadow-blue-200 text-xl font-medium'>Join us</Button>
            </div>
          )
        }
        
      </div>
    </div>
  );
}

export default Navbar;