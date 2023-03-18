import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import DonorJsonData from "../../../json/DonorMap.json";
import "./SearchDonors.css";

const SearchDonors = () => {

    const valueRef = useRef('') 
    const [donarName, setDonorName] = useState("");
    useEffect(() => {
        const seacrh_val = document.querySelector("#search_donor_number");
        const seacrh_btn = document.querySelector("#search_donor_btn");
        seacrh_btn.addEventListener("click", () => {
            if(DonorJsonData[valueRef.current.value].popup) {
                setDonorName(DonorJsonData[valueRef.current.value].popup)
            } else {
                setDonorName("No Donor")
            }
        })
      }, [])



    return (
        <div className='search_donors_wrapper'>
            <h3>Find who owns the mile</h3>
            <TextField type="number"
                inputProps={{ min: 0, max: 1045 }}
                style={{width: '150px'}}
                id="search_donor_number outlined-basic" 
                label="mile number" 
                variant="outlined"
                inputRef={valueRef} />
            <Button 
            id="search_donor_btn"
            variant="outlined"
            style={{width: '75px', height: '30px'}}>Search</Button>
            <p>{donarName}</p>
        </div>
    )
}

export default SearchDonors