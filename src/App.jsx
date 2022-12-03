import { useEffect, useState } from "react";
import getUser from "./http/getUser";
import SearchForm from "./components/searchForm";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({});
  const [searchText, setSearchText] = useState('');

  function handleSearch(e) {
    e.preventDefault()
    if (searchText !== '') {
      getUser(searchText).then((data) => setUser(data))
    } else {
      console.log("sdsd");
    }
  }

  return (
    <div className={`w-full min-h-screen pt-6 sm400:pt-14 md800:pt-20 ${darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"}`}>
      <div className=" w-[327px] sm400:w-[573px] md800:w-[730px] pb-10 mx-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchForm handleSearch={handleSearch} darkMode={darkMode} setSearchText={setSearchText} searchText={searchText} />
        {user.login !== undefined && <UserCard user={user} darkMode={darkMode} />}
      </div>
    </div >
  );
}

export default App;
