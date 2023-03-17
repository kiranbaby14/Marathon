import React from 'react'
import partner1 from '../../../assets/partner1.png'
import partner2 from '../../../assets/partner2.png'
import partner3 from '../../../assets/partner3.png'
import partner4 from '../../../assets/partner4.png'
import "./Partners.css";

const Partners = () => {
    const partners = [partner1, partner2, partner3, partner4];

    return (
        <section className='partners'>
            <div className='text'>
                <h3 className='partners_heading'>Our Partners</h3>
            </div>

            <div className='partners_slider'>
                <div className='partners_slide_track'>
                    {partners.map((partner, key) => (
                        <img src={partner} alt={`${partner}_img`} className="partners_img" key={key}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners