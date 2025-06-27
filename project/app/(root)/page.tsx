
import React from 'react'
import SearchForm from '../components/SearchForm'

const page = () => {
  return (
    <div>
     <section  style={{
    backgroundColor: "#FF2E63",
    backgroundImage:
      "linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%)",
    backgroundSize: "5vw 100%",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "center",
    height: "50vh",
  }}className='w-full bg-white min-h-[530px] flex justify-center items-center flex-col py-10 px-6;'>
      <h1 className='text-3xl heading'>share your thing, <br />connect with your famaly</h1>
      <p>share, connect, explore....</p>
      <SearchForm />
     </section>
    </div>
  )
}

export default page
