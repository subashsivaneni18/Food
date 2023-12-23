import React from 'react'

import {BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    <div className="w-[60vw] flex items-center gap-2 ">
      <input
        type="text"
        className=" 
       border-[.5px] 
       text-black
       border-neutral-100
       w-[50vw]
       ring-1
       ring-neutral-200
       px-2
       py-2
       rounded-lg
       outline-1
       "
        placeholder="find your food"
      />
      <BiSearch size={24} />
    </div>
  );
}

export default Search
