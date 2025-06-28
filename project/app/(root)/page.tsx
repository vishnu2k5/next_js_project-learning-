
import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard';

const page = async({searchParams}:{
  searchParams: Promise<{query?:string}>
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views:55,
      author:{_id:1, name: 'visnu'},
      _id:1,
      description:'adfafasfasfasfasfasf',
      image:'https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category:'robots',
      title:'we robots',
    }
  ]
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
      <SearchForm query={query}/>
     </section>
     <section className='px-6 py-10 max-w-7xl mx-auto'>
      <p className='text-30-semibold'>
        {query?`search results for "${query}"` : 'All posts'} 

      </p>

      <ul className='mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {posts?.length>0 ? (
          posts.map(
            (posts:StartupCardType, index:number)=>(
              <StartupCard key={posts?._id} post = {posts} />
            )
          )
        ):(
          <p className='text-black-100 text-sm font-normal'>
            noposts found
          </p>
        )
      }

      </ul>

     </section>
    </div>
  )
}

export default page
