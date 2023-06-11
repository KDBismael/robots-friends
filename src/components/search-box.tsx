import { FormEvent } from "react";

interface T_props{
    searchChange:(e:FormEvent<HTMLInputElement>)=>void
}

const SearchBox=({searchChange}:T_props)=>(
    <div className="p-2 flex justify-center">
        <input onChange={(e)=>searchChange(e)} className="p-3 outline-none text-black bg-blue-200 border border-green-200" type="search" placeholder="search robots"/>
    </div>
)

export default SearchBox;