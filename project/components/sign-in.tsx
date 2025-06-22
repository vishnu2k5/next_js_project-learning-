
"use client"

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button  className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer active:scale-95 transition-transform duration-150" onClick={() => signIn("google") }>signin</button>
}
