import searchIcon from "../assets/search.svg";
import getUser from "../http/getUser";
import { useState } from "react"

function SearchForm({ darkMode, setUser, setLoading }) {
    const [searchText, setSearchText] = useState('');
    const [getUserError, setGetUserError] = useState({ error: false, message: "" })
    function handleSearch(e) {
        e.preventDefault()
        setUser({})
        if (searchText !== '') {
            setSearchText('')
            getUser(searchText, setGetUserError, setLoading).then((data) => {
                setUser(data)
                if (data.login !== undefined) localStorage.setItem("USER", JSON.stringify(data))
            }).finally(() => setLoading(false))
        } else {
            setGetUserError({ error: true, message: "empty" })
        }
    }
    return <>
        <form onSubmit={handleSearch} className={`mb-10 flex rounded-lg p-2 items-center ${darkMode ? "bg-main-dark-light" : "bg-white"}`}>
            <img alt="search icon" src={searchIcon} className='mr-2 sm400:mr-6 ml-6' />
            <input
                placeholder="Search GitHub username…"
                className={`text-xsm sm400:text-base w-full mr-2 focus:outline-none ${darkMode && "bg-main-dark-light text-white"}`}
                value={searchText}
                onChange={(e) => {
                    setGetUserError({ error: false, message: "" });
                    setSearchText(e.target.value);
                }}
            />
            <span className={`text-main-red font-bold ml-auto mr-2 sm400:mr-6 whitespace-nowrap ${!getUserError.error && "hidden"} `}>{getUserError.message}</span>
            <button type="submit" className="font-bold text-xsm14 sm400:text-n text-white bg-main-blue rounded-lg py-3 px-4 ">Search</button>
        </form>
    </>
}

export default SearchForm