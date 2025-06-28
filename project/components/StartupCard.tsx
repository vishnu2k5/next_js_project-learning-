import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const StartupCard = ( {post}:{post:StartupTypeCard}) => {

    const { _createdAt, views, author:{_id:authorid, name},image, title, _id , category} = post

  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-[#F7F7F7] transition-all duration-500 hover:shadow-300 hover:bg-[#FFE8F0]'>
        <div className='flex gap-25'>
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
        <div className='flex-between mt-5 gap-5'>
            <div className='fles-1'>
                <Link href={`/user/${authorid}`}>
                <p className='text-16-medium line-clamp-1 text-black'>{name}</p>
                </Link>
                <Link href={`/satrtup/${_id}`}>
                <h2 className='text-26 font-bold text-black line-clamp-1'>{title}</h2></Link>

            </div>

        </div>

    </li>


  )
}

export default StartupCard
