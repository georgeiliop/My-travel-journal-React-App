import React from 'react'

const Card = (props) => {
    return (
        <div className='column'>
            <div className='container'>
                <img src={props.imageUrl} alt="firstplay" className='pic'/>
                <div className='infocontainer'>
                    <div className='container3'>
                        <p className='location'><i class="fa-solid fa-location-dot"></i>{props.location}</p>
                        <p className='googleMapsUrl'>View on Google Maps</p>
                    </div>
                    <h1 className='title'>{props.title}</h1>
                    <div className='container3'>
                        <h3 className='startDate'>{props.startDate} -</h3>
                        <h3 className='endDate'>{props.endDate}</h3>
                    </div>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

