import React from 'react'

function ListDates({ dates }) {
    console.log("Dates: ", dates)
    return (
        <div className='dates'>
            <ul>
                {
                    dates.map(date => {
                        return (<li key={date.id} className="date">
                            <div className='date-'>
                                {date.date}
                            </div>
                            <div>
                                {date.info}
                            </div>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default ListDates