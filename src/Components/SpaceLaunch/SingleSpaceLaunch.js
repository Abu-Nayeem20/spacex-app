import React from 'react';

const SingleSpaceLaunch = ({ launch }) => {
    // console.log("Launch", launch)
    const { details, flight_number, launch_success, launch_year, mission_name,  } = launch;

    const { rocket_name, rocket_type, rocket_id} = launch.rocket;
    return (
        <div class="col">
        <div class="card h-100">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{flight_number}</h5>
            <h5>Rocket Name: {rocket_name}</h5>
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