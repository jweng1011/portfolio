import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export function CaseStudyButton({title, description, image}) {
    const active = "border rounded-md border-gray-300"
    const hover = "hover:shadow-lg hover:bg-gray-100 transform hover:scale-105";
    const transition = "transition duration-300 ease-in-out";

    return (
        <div>
            <Link to={"/" + title} className={`max-w-2xl m-auto`}>
                <div className={`${active} ${hover} ${transition} h-full w-full p-8 space-y-3`}>
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <img src={image} className={`m-auto h-1/4`} alt={title} />
                </div>
            </Link>
        </div>
    )
}

CaseStudyButton.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};