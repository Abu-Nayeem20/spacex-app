import React, { useEffect } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from '../../Redux/Slices/spaceSlice';

const SpaceLaunch = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchLaunches());
    }, [dispatch]);
  
    const launches = useSelector((state) => state.launches)
  
    console.log("success", launches)

    return (
        <div className='container'>
            {/* Search Bar */}
            <div className="search-bar w-50 mx-auto">
            <InputGroup className="my-5">
                <FormControl
                placeholder="Search by Rocket Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
            </InputGroup>
            </div>
            {/* Product and filter */}
            

        </div>
    );
};

export default SpaceLaunch;