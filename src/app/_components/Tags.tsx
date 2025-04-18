import { Tag } from 'lucide-react'
import React from 'react'

const Tags = () => {
  return (
    <div className="shadow-lg rounded-md px-2 py-5 ">
        <div className='flex items-center gap-1 text-sm'>
            <Tag className='text-primary' />
            برچسب ها
        </div>
        <div className='mt-4  border-t'></div>
    </div>
  )
}

export default Tags