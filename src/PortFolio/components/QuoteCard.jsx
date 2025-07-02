import React from 'react'

const QuoteCard = ({ className, cardId, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={`${className} flex justify-center items-center italic font-medium`}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

            " Create what you wish existed... "
        </div>
    )
}

export default QuoteCard

