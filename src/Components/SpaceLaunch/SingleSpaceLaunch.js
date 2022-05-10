import React from 'react';

function SingleSpaceLaunch({ launch }) {
    // console.log('Launch', launch);
    const { details, flight_number, launch_success, launch_year, mission_name, upcoming, links } =
        launch;

    const photo = links.mission_patch;
    const detailsSlice = details?.slice(0, 115);

    // console.log(detailsSlice);

    const { rocket_name } = launch.rocket;
    return (
        <div className="col">
            <div className="card h-100">
                {photo ? (
                    <img src={`${photo}`} className="card-img-top" alt="Img" />
                ) : (
                    <img src="https://i.imgur.com/t5R4BAQ.png" className="card-img-top" alt="Img" />
                )}

                <div className="card-body">
                    <h5 className="card-title">Flight No: {flight_number}</h5>
                    <h5>Mission Name: {mission_name}</h5>
                    <h5>Rocket Name: {rocket_name}</h5>
                    <h6>Launch Status: {launch_success === true ? `Success` : `Failure`}</h6>
                    <h6>Condition: {upcoming === true ? `Upcoming` : `Not`}</h6>
                    <h6>Launching Year: {launch_year}</h6>
                    <p>
                        {detailsSlice ||
                            `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sed necessitatibus error inventore asperiores odit similique tempore.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleSpaceLaunch;
