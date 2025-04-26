import React from 'react'

const Card = ({userName,branch}) => {
  return (
    <div>
     
     <div className="relative flex flex-col bg-white shadow-sm my-6 border border-slate-200 rounded-lg w-96">
  <div className="relative m-2.5 rounded-md h-56 overflow-hidden text-white">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
  </div>
  <div className="p-4">
    <h6 class="mb-2 font-semibold text-slate-800 text-xl">
      {userName}
    </h6>
    <p class="font-light text-slate-600 leading-normal">
    {branch}
    </p>
  </div>
  <div class="mt-2 px-4 pt-0 pb-4">
    <button class="bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700 disabled:opacity-50 shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:shadow-none px-4 py-2 border border-transparent rounded-md text-white text-sm text-center transition-all disabled:pointer-events-none" type="button">
      Read more
    </button>
  </div>
</div>  
    </div>
  )
}

export default Card
