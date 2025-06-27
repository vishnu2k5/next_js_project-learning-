import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'

const StartupCard = ( {post}:{post:StartupTypeCard}) => {

  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100'>
        <div className='flex-between'>
            <p className='font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100 text-black'>
                {formateDate(post._createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-black'></EyeIcon>
                <span className='text-16-medium text-black'>
                    {post.views}
                </span>
            </div>
        </div>
        <div>

        </div>

    </li>


  )
}

export default StartupCard
