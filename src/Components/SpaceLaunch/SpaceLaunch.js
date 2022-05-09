import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from '../../Redux/Slices/spaceSlice';
import SingleSpaceLaunch from './SingleSpaceLaunch';

const SpaceLaunch = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchLaunches());
    }, [dispatch]);
  
    const launches = useSelector((state) => state.launches.launches)
  
    // console.log("Success", launches)
    const [searchItems, setSearchItems] = useState(launches);

    const handleSearch = e => {
        const searchText = e.target.value;
        console.log(searchText);
        const matchedItems = launches.filter(item => item?.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase()));

        setSearchItems(matchedItems);
    }
    console.log("init", searchItems)
    return (
        <div className='container-fluid'>
            {/* Search Bar */}
            <div className="search-bar w-50 mx-auto">
            <InputGroup className="my-5">
                <FormControl
                placeholder="Search by Rocket Name"
                onChange={handleSearch}
                />
                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
            </InputGroup>
            </div>
            {/* Product and filter */}
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className='border-end border-info'>
                                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit incidunt blanditiis deleniti esse nobis distinctio laudantium ipsam eveniet rerum repellendus. Porro aliquam et laboriosam aut temporibus asperiores accusamus perferendis quam?</h2>
                            </div>
                        </div>
                        <div className="col-md-9">
                            {searchItems.length > 0 ?
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {searchItems.length === 0 ?
                                <div className='text-center mt-5'>
                                    <p>No Result Found</p>
                                </div>
                            :
                                <>
                                    {
                                        searchItems.map(launch =>
                                            <SingleSpaceLaunch
                                            key={launch.mission_name} 
                                            launch={launch}
                                            ></SingleSpaceLaunch>
                                        )
                                    }
                                </>
                            }
                            </div>
                            :
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {launches.length === 0 ?
                                <div className='text-center mt-5'>
                                    <Spinner animation="border" variant="info" />
                                </div>
                            :
                                <>
                                    {
                                        launches.map(launch =>
                                            <SingleSpaceLaunch
                                            key={launch.mission_name} 
                                            launch={launch}
                                            ></SingleSpaceLaunch>
                                        )
                                    }
                                </>
                            }
                            </div>

                            }
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default SpaceLaunch;