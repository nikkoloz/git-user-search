import { useEffect, useState } from "react";
import SearchForm from "./components/searchForm";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

import Loading from "./components/Loading";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const dark = JSON.parse(localStorage.getItem("DARKMODE"))
    setDarkMode(dark)
    if (localStorage.getItem("USER") === null) localStorage.setItem("USER", JSON.stringify({}))
    else setUser(JSON.parse(localStorage.getItem("USER")))
  }, [])

  return (
    <div className={`w-full min-h-screen pt-6 sm400:pt-14 md800:pt-20 ${darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"}`}>
      <div className=" w-[327px] sm400:w-[573px] md800:w-[730px] pb-10 mx-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchForm setUser={setUser} darkMode={darkMode} setLoading={setLoading} />
        {loading && <Loading />}
        {user.login !== undefined && <UserCard user={user} setUser={setUser} darkMode={darkMode} />}
      </div>
    </div >
  )
}

export default App;