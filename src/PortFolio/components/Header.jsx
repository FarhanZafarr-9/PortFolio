
const Header = ({ isDarkMode }) => {
    return (
        <div className={`absolute top-0 flex w-screen justify-center text-4xl font-bold ${isDarkMode ? 'bg-[#181818] text-[#f0f0f0]' : 'bg-[#d0d0d0] text-[#282828]'} py-4  border-[0.75px] border-[#44444444] border-l-0 border-r-0
        transition-all duration-300 ease-in-out`} >
            About me
        </div>
    )
}

export default Header