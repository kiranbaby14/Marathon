import React from 'react'
import { partner1, partner3} from '../../StaticFilePath';
import "./Partners.css";

const Partners = () => {
    const partners = [partner1, partner3];

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