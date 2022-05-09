import React from 'react';

const SingleSpaceLaunch = ({ launch }) => {
    // console.log("Launch", launch)
    const { details, flight_number, launch_success, launch_year, mission_name, upcoming, launch_date_local  } = launch;

    const dateSlice = launch_date_local.slice(0,10);

    console.log(dateSlice)

    const { rocket_name, rocket_type, rocket_id} = launch.rocket;
    return (
        <div className="col">
        <div className="card h-100">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{flight_number}</h5>
            <h5>Rocket Name: {rocket_name}</h5>
            <h6>Launch Status: {launch_success === true?
            `Success`
            :
            `Failure`
        }</h6>
            <h6>Condition: {upcoming === true?
            `Upcoming`
            :
            `Not`
        }</h6>
        <h6>Launching Year: {launch_year}</h6>
            <p>{details ?
                 details
                 :
                 `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sed necessitatibus error inventore asperiores odit similique tempore.`
                }</p>
        </div>
        </div>
    </div>
    );
};

export default SingleSpaceLaunch;