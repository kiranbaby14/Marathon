import React, { useEffect } from 'react';
import "./SearchDonors.css";

const SearchDonors = () => {
    useEffect(() => {
        const minus = document.querySelector(".minus");
        const number = document.querySelector(".number");
        const plus = document.querySelector(".plus");

        let increment = 1;

        plus.addEventListener("click", () => {
            increment++;
            number.value = increment;
        })

        minus.addEventListener("click", () => {
            if (increment > 0) {
                increment--;
                number.value = increment;
            }
        })
    }, [])

    return (
        <div className='seacrh_donors_wrapper'>
            <span className='minus'>-</span>
            {/* <span className='number'>0000</span> */}
            <input className='number' placeholder='0' />
            <span className='plus'>+</span>
        </div>
    )
}

export default SearchDonors