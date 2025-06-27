import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth, signIn,signOut } from '@/auth'

const Navbar = async() => {
  const session = await auth()
  return (
   
    <header className='px-5 py-3 bg-white shadow-sm font-workSans'>
        <nav className='flex justify-between items-center'>
            <Link  href="/" >
              <Image src="/logo.png" alt="logo" width={144} height={30} />
            </Link>
            <div className='flex items-center gap-5 text-black font-workSans '>
              {session&&session?.user?(
                <>
                <Link href="/startup/create" className='cursor-pointer hover:opacity-90'>
                <span>
                  create
                </span>
                </Link>
                <form action={async()=>{
                  "use server"
                  await signOut()
                }}>
                  <button type='submit' className='cursor-pointer hover:opacity-90'>logout</button>
                </form>
                <Link href={`/user/${session?.user?.id}`} className='cursor-pointer hover:opacity-90'> <span>{session?.user?.name}</span></Link>
                </>
          ) : (
            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button type="submit" className='cursor-pointer hover:opacity-90'>Signin</button>
            </form>
          )}


            </div>

        </nav>
    </header>
  )
}

export default Navbar
