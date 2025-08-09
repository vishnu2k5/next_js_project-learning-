
import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard,{ StartupTypeCard }  from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch,SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

const page = async({searchParams}:{
  searchParams: Promise<{query?:string}>
}) => {
  const query = (await searchParams).query;
  const params = {search:query||null}
  // console.log(JSON.stringify(posts, null , 2))
  const session = await auth();
  const {data:posts}=await sanityFetch({query:STARTUPS_QUERY,params})

  return (
    <>
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
      <p className='font-semibold text-[28px] text-black '>
        {query?`search results for "${query}"` : 'All posts'} 

      </p>

      <ul className='mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {posts?.length>0 ? (
          posts.map(
            (posts:StartupTypeCard, index:number)=>(
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
     <SanityLive/>
    </>
    
  )
}

export default page
