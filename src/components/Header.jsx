import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg"

function Header({ darkMode, setDarkMode }) {
    return <div className={`flex justify-between mb-9 ${darkMode ? "bg-main-dark-bg" : "bg-main-gray-light"}`}>
        <h1 className={`font-bold text-xl ${darkMode ? "text-white" : ""}`}>devfinder</h1>
        {!darkMode ? <button onClick={() => setDarkMode(true)} className="flex items-center">
            <p className={`font-bold text-xsm text-main-gray2`}>LET THERE BE DARK</p>
            <img src={moon} className='ml-4' />
        </button> : <button onClick={() => setDarkMode(false)} className="flex items-center">
            <p className="font-bold text-xsm text-white">LET THERE BE LIGHT</p>
            <img src={sun} className='ml-4' />
        </button>
        }
    </div>
}
export default Header;