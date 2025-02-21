import React from 'react'

const Loading = () => {
  return (
    <div className='flex bg-[#212121] items-center justify-center h-screen'>
      <div className="flex items-center justify-center w-20 h-20 p-2 text-5xl font-bold text-green-500 border-4 border-green-500 border-solid rounded-full border-t-transparent animate-pulse">
      <div className="flex items-center justify-center w-16 h-16 text-5xl font-bold text-green-500 border-4 border-green-500 border-solid rounded-full border-t-transparent animate-spin">
        V
      </div>
      </div>
    </div>
  )
}

export default Loading