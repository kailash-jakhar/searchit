import { useState } from "react";
import './SearchBar.css'
interface SearchBarProps {
    onSearch: (query:string) => void
}

export const SearchBar = ({onSearch}:SearchBarProps) => {
    const [search , setSearch] = useState("");
    return(
        <div className="search-bar-wrapper">
                <div className="search__bar">
                    <form onSubmit={(event)=>{onSearch(search);event.preventDefault()}}>
                        <input type="text" name="search" value={search} placeholder="Search for images here..." onChange={(e)=>setSearch(e.target.value)} />                
                        <button type="submit" className="search-icon"></button>
                    </form>                    
                </div>
        </div>
    )
}

export default SearchBar