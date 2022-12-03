import { useState, useEffect } from "react"
import formatDate from "../functions/formatDate";

function UserCard({ user, darkMode, setUser }) {
    const [formatedDate, setFormatedDate] = useState('')

    useEffect(() => {
        if (user.login !== undefined) {
            setFormatedDate(formatDate(user.created_at))
        }
    }, [user])

    const deleteUser = () => {
        setUser({})
        localStorage.setItem("USER", "{}")
    }
    return <div className={`p-12 rounded-lg relative ${darkMode ? "bg-main-dark-light" : "bg-white"}`}>
        <button onClick={deleteUser} className={`absolute right-1 top-1 rounded-full py-1 px-3 font-bold ${darkMode ? "bg-main-dark-bg " : " bg-main-gray-light  "} text-red-700`}>x</button>
        <div className="flex">
            <img src={user.avatar_url} className="h-[70px] w-[70px] sm400:w-[117px] sm400:h-[117px] rounded-full mr-9" />

            <div className="md800:flex justify-between w-full">
                <div className="">
                    <h1 className={`font-bold text-n sm400:text-xl ${darkMode ? "text-white" : "text-main-gray-dark"} `}>{user.name}</h1>
                    <p className="text-xsm sm400:text-n text-main-blue mb-2">@{user.login}</p>
                </div>
                <p className={`text-xsm sm400:text-sm ${darkMode ? "text-white" : "text-main-gray2"}`} >Joined {formatedDate}</p>
            </div>
        </div>


        <div className="mt-10 md800:ml-[152px]">
            <p className={`text-xsm sm400:text-sm mb-8 ${darkMode ? "text-white" : "text-main-blue-light"}`}>{user.bio === null ? "This profile has no bio" : user.bio}</p>
            <div className={`flex justify-between rounded-lg px-8 py-4 mb-8 ${darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"}`}>
                <div >
                    <p className={`text-xxsm sm400:text-xsm ${darkMode ? "text-white" : "text-main-blue-light"}`}>Repos</p>
                    <h1 className={`font-bold text-n sm400:text-lg ${darkMode ? "text-white" : "text-main-gray-dark"}`}>{user.public_repos}</h1>
                </div>
                <div>
                    <p className={`text-xxsm sm400:text-xsm ${darkMode ? "text-white" : "text-main-blue-light"}`}>Followers</p>
                    <h1 className={`font-bold text-n sm400:text-lg ${darkMode ? "text-white" : "text-main-gray-dark"}`}>{user.followers}</h1>
                </div>
                <div>
                    <p className={`text-xxsm sm400:text-xsm ${darkMode ? "text-white" : "text-main-blue-light"}`}>following</p>
                    <h1 className={`font-bold text-n sm400:text-lg ${darkMode ? "text-white" : "text-main-gray-dark"}`}>{user.following}</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm400:grid-cols-2 gap-2">
                <div className="flex items-center">
                    <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg" fill={`${darkMode ? "#FFF" : "#4b6a9b"}`}><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" /></svg>
                    <span className={`text-xsm sm400:text-sm  ml-5 ${darkMode ? "text-white" : "text-main-blue-light"}`}>{user.location === null ? "Not Available" : user.location}</span>
                </div>
                <div className="flex items-center sm400:mb-3">
                    <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg" fill={`${darkMode ? "#FFF" : "#4b6a9b"}`}><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" /></svg>
                    <span className={`text-xsm sm400:text-sm  ml-5 ${darkMode ? "text-white" : "text-main-blue-light"}`}>{user.twitter_username === null ? "Not Available" : user.twitter_username}</span>
                </div>
                <div className="flex items-center">
                    <a
                        className={`flex items-center ${user.blog !== "" && "underline"} `}
                        href={user.blog === "" ? undefined : user.blog}
                        target="_blank"
                    >
                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill={`${darkMode ? "#FFF" : "#4b6a9b"}`}><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" /><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" /></g></svg>
                        <span className={`text-xsm sm400:text-sm  ml-5 ${user.blog !== "" && "underline"}  ${darkMode ? "text-white" : "text-main-blue-light"}`}>{user.blog === "" ? "Not Available" : user.blog.slice(12, user.blog.length)}</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill={`${darkMode ? "#FFF" : "#4b6a9b"}`}><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" /></g></svg>
                    <span className={`text-xsm sm400:text-sm  ml-5 ${darkMode ? "text-white" : "text-main-blue-light"}`}>{user.company === null ? "Not Available" : user.company}</span>
                </div>
            </div>
        </div>
    </div >
}

export default UserCard;