import React from 'react'
import Form from "next/form";
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({query}:{query?:string}) => {

  return (
    <Form action="/" scroll={false} className='search-form'>
      <input 
      name='query'
      defaultValue={query}
      className='flex-1 font-bold placeholder:font-semibold text-[#333333] w-full h-auto outline-none'
      placeholder='search....' />
      <div className='flex gap-2'>
        {query&&<SearchFormReset/>}
        <button type='submit' className='size-[50px] rounded-full bg-black flex justify-center items-center text-white'>
          <Search className='size-5'/>
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
