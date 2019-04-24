import React from 'react';
import socialjson from '../data/social.json'

const Socials = () => {
    return (
        <React.Fragment>
            {socialjson.map(social => (

                <a key={social.link} style={{ color: 'white', fontSize: 40, paddingRight: 15 }} href={social.link}>
                        <span className={social.icon}></span>
                </a>
            ))
            }
        </React.Fragment>
    );
};

export default Socials