import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Modal, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from '../../Redux/Slices/spaceSlice';
import SingleSpaceLaunch from './SingleSpaceLaunch';

const SpaceLaunch = () => {

    const [smShow, setSmShow] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchLaunches());
    }, [dispatch]);
  
    const launches = useSelector((state) => state.launches.launches)
  
    // console.log("Success", launches.upcoming)
    const [displayItems, setDisplayItems] = useState(launches);

    const handleSearch = e => {
        const searchText = e.target.value;
        // console.log(searchText);
        const matchedItems = launches.filter(item => item?.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayItems(matchedItems);
    }
    // console.log("init", displayItems)

    // filter data

    const filterUpcoming = e => {
        const checkedItems = e.target.checked;
        if (checkedItems === true) {
            const upComing = launches.filter(item => item.upcoming === true);   
            setDisplayItems(upComing);
        }else{
            setDisplayItems(launches);
        }
    }

    const filterSuccess = e => {
        const checkedItems = e.target.checked;
        if(checkedItems === true){
            const success = launches.filter(item => item.launch_success === true);   
            setDisplayItems(success);
            
        }else{
            setDisplayItems(launches);
        }
    }
    const filterFailure = e => {
        const checkedItems = e.target.checked;
        if(checkedItems === true){
            const failure = launches.filter(item => item.launch_success === false);   
            setDisplayItems(failure);
            
        }else{
            setDisplayItems(launches);
        }
    }
    const filterLastYear = e => {
        const checkedItems = e.target.checked;
        if(checkedItems === true){
            const lastYear = launches.filter(item => item.launch_year === "2021");
            if (lastYear.length === 0) {
                setSmShow(true);
            }   
            setDisplayItems(lastYear);
            
        }else{
            setDisplayItems(launches);
        }
    }
    const filterLastMonth = e => {
        const checkedItems = e.target.checked;
        if(checkedItems === true){
            const lastMonth = launches.filter(item => item.launch_date_local.slice(0,7) === "2022-04");
            if (lastMonth.length === 0) {
                setSmShow(true);
            }   
            setDisplayItems(lastMonth);
            
        }else{
            setDisplayItems(launches);
        }
    }
    const filterLastWeek = e => {
        const checkedItems = e.target.checked;
        if(checkedItems === true){
            const lastWeek = launches.filter(item => item.launch_date_local.slice(0,10) >= "2022-05-03");
            if (lastWeek.length === 0) {
                setSmShow(true);
            }   
            setDisplayItems(lastWeek);
            
        }else{
            setDisplayItems(launches);
        }
    }

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
                                <div className='text-center'>
                                    <h4>Data Filter</h4>
                                </div>
                                {/* Launch Date  */}
                                <div>
                                    <h5 className='fw-bold'>Launch Date</h5>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"
                                onChange={filterLastWeek}/>
                                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault1">
                                    Last Week
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"
                                onChange={filterLastMonth}/>
                                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault2">
                                    Last Month
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"
                                onChange={filterLastYear}/>
                                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault3">
                                    Last Year
                                </label>
                                </div>
                                </div>
                                {/* Launch Status */}
                                <div>
                                    <h5 className='fw-bold'>Launch Status</h5>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"
                                onChange={filterSuccess}/>
                                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault4">
                                    Success
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"
                                onChange={filterFailure}/>
                                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault5">
                                    Failure
                                </label>
                                </div>
                                </div>
                                {/* Condition */}
                                <div>
                                    <h5 className='fw-bold'>Condition</h5>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6"
                                onChange={filterUpcoming}/>
                                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault6">
                                    Upcoming
                                </label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            {displayItems.length > 0 ?
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {displayItems.length === 0 ?
                                <div className='text-center mt-5'>
                                    <p>No Result Found</p>
                                </div>
                            :
                                <>
                                    {
                                        displayItems.map(launch =>
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
                <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Oppps!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>No Launches history found.</Modal.Body>
            </Modal>            
        </div>
        
    );
};

export default SpaceLaunch;