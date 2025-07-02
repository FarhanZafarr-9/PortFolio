import React, { use, useState } from 'react'
import ProfileCard from './ProfileCard'
import SkillsCard from './SkillsCard'
import SocialsCard from './SocialsCard'
import IntroCard from './IntroCard'
import ContactCrad from './ContactCrad'
import HobbiesCard from './HobbiesCard'
import ProjectsCard from './ProjectsCard'
import QuoteCard from './QuoteCard'
import { projects, info, languages, contacts } from './Data'

const ProfileGrid = ({ isDarkMode }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [hoverId, setHoverId] = useState(null);
    const [CardId, setCardId] = useState(null);
    const getBlurClass = (id) => hoverId === null ? 'scale-100' : hoverId !== id && id !== "Profile" ? 'blur-[3px]' : id !== "Profile" ? 'scale-[98%]' : '';

    function handleHover(cardId) {
        (cardId) ? setCardId(cardId) : setCardId(null);
        (cardId) ? setHoverId(cardId) : setHoverId(null);
    };

    const hover = ` shadow-lg hover:translate-x-2 ${!isExpanded ? 'hover:opacity-25' : ''}`;

    const hide = ` ${isExpanded ? 'opacity-100' : 'opacity-0'} `

    const cName = ` border-[0.75px] ${isDarkMode ? 'border-[#55555555] bg-[#181818] text-white' : 'border-[#aaaaaa] bg-[#d0d0d0] text-black'} rounded-lg 
    transition-all duration-300 ease-in-out` + hide;

    return (

        <div className="grid grid-cols-[repeat(5,15vw)] grid-rows-[repeat(4,15vh)] gap-6 p-4  rounded-2xl">
            <SocialsCard
                className={`col-span-1 row-span-1${cName} ${getBlurClass("Socials")}`}
                isDarkMode={isDarkMode}
                hover={hover}
                socials={contacts}
                hide={hide}
                cardId="Socials"
                onMouseEnter={() => handleHover("Socials")}
                onMouseLeave={() => handleHover(null)}
            />
            <IntroCard
                className={`col-span-4 row-span-1${cName + hover} ${getBlurClass("Intro")}`}
                info={info}
                cardId="Intro"
                onMouseEnter={() => handleHover("Intro")}
                onMouseLeave={() => handleHover(null)}
            />
            <SkillsCard
                className={`col-span-2 row-span-1${cName + hover} ${getBlurClass("Skills")}`}
                languages={languages}
                cardId="Skills"
                onMouseEnter={() => handleHover("Skills")}
                onMouseLeave={() => handleHover(null)}
            />
            <ProfileCard
                className={`col-span-1 row-span-2 shadow-md ${cName} ${getBlurClass("Profile")}`}
                isDarkMode={isDarkMode}
                isExpanded={isExpanded}
                onclick={() => { setIsExpanded(!isExpanded); onclick() }}
                cardId="Profile"
                onMouseEnter={() => handleHover("Profile")}
                onMouseLeave={() => handleHover(null)}
            />
            <ProjectsCard
                className={`col-span-2 row-span-3 ${cName + hover} ${getBlurClass("Project")}`}
                projects={projects}

                cardId="Project"
                onMouseEnter={() => handleHover("Project")}
                onMouseLeave={() => handleHover(null)}
            />
            <HobbiesCard
                className={`col-span-1 row-span-2${cName + hover} ${getBlurClass("Hobbies")}`}
                cardId="Hobbies"
                onMouseEnter={() => handleHover("Hobbies")}
                onMouseLeave={() => handleHover(null)}
            />
            <QuoteCard
                className={`col-span-1 row-span-1${cName + hover} ${getBlurClass("Quote")}`}
                cardId="Quote"
                onMouseEnter={() => handleHover("Quote")}
                onMouseLeave={() => handleHover(null)}
            />
            <ContactCrad
                className={`col-span-2 row-span-1${cName + hover} ${getBlurClass("Contact")}`}
                contacts={contacts}
                cardId="Contact"
                onMouseEnter={() => handleHover("Contact")}
                onMouseLeave={() => handleHover(null)}
            />
        </div>
    )
}

export default ProfileGrid;