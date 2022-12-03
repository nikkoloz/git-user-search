import searchIcon from "../assets/search.svg";


function SearchForm({ handleSearch, darkMode, setSearchText, searchText }) {

    return <form onSubmit={handleSearch} className={`mb-10 flex rounded-lg p-2 items-center ${darkMode ? "bg-main-dark-light" : "bg-white"}`}>
        <img src={searchIcon} className='mr-2 sm400:mr-6 ml-6' />
        <input
            placeholder="Search GitHub username…"
            className={`text-xsm sm400:text-base w-full mr-2 focus:outline-none ${darkMode ? "bg-main-dark-light text-white" : ""}`}
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
        />
        <span className={`text-main-red font-bold ml-auto mr-2 sm400:mr-6 whitespace-nowrap hidden`}>No results</span>
        <button type="submit" className="font-bold text-xsm14 sm400:text-n text-white bg-main-blue rounded-lg py-3 px-4 ">Search</button>
    </form>
}

export default SearchForm