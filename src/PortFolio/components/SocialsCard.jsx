
const SocialsCard = ({ isDarkMode, className, socials, cardId, onMouseEnter, onMouseLeave }) => {

    return (
        <div className={`overflow-auto grid grid-cols-2 grid-rows-2 ${className} gap-8 border-transparent bg-transparent pr-2 shadow-none`}
        >
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`row-span-1 col-span-1 w-full h-full border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#44444444]' : 'bg-[#cdcdcd] border-[#aaaaaa]'} rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out `}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                >
                    <social.icon size={30} color={!isDarkMode ? '#121212' : '#f0f0f0'} className="transition-all duration-300 ease-in-out" />
                </a>
            ))}
        </div>
    )
}

export default SocialsCard