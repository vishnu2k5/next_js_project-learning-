import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;


  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-[#F7F7F7] transition-all duration-500 hover:shadow-300 hover:bg-[#FFE8F0]'>
        <div className='flex justify-between gap-5'>
            <p className='font-medium text-[16px] bg-[#FFE8F0]-100 px-4 py-2 rounded-full group-hover:bg-[#F7F7F7] text-black'>
                {formateDate(_createdAt)}
            </p>
            <div className='flex gap-1.5 px-4 py-2'>
                <EyeIcon className='size-6 text-[#EE2B69]'></EyeIcon>
                <span className='text-16-medium text-black'>
                    {views}
                </span>
            </div>
        </div>
        <div className='flex justify-between mt-5 gap-5'>
            <div className='fles-1'>
                <Link href={`/user/${author?._id}`}>
                <p className='text-16-medium line-clamp-1 text-black'>{author?.name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                <h2 className='text-26 font-bold text-black line-clamp-1'>{title}</h2></Link>
            </div>
            <Link href={`/user/${author?._id}`}>
            <Image src='https://placehold.co/48x48' alt='placeho;dimg' width={48} height={48} className='rounded-full' /></Link>
        </div>
        <Link href={`/startup/${_id}`}>
        <p className='font-normal text-[16px] line-clamp-2 my-3 text-black break-all'>{description}</p>
        <img src={image} alt="startupimg" className='w-full h-[164px] rounded-[10px] object-cover' /></Link>

        <div className=' flex justify-between gap-3 mt-5'>
            <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className='text-16 size-medium text-black'>{`#${category}`}</p></Link>
            <Button className='rounded-full bg-black font-medium text-[16px] text-white px-5 py-3' asChild>
                <Link href={`/startup/${_id}`}> Details</Link>
            </Button>
        </div>
    </li>


  )
}

export default StartupCard
