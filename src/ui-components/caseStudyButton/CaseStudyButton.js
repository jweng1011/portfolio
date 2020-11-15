import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export function CaseStudyButton({title, description, image}) {
    const active = "border rounded-md border-indigo-200"
    const hover = "hover:border-2 hover:shadow-lg hover:bg-light transform hover:scale-101";

    return (
        <div>
            <Link to={"/" + title} className={`max-w-2xl m-auto`}>
                <div className={`${active} ${hover} h-full w-full p-8`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={image} className={`m-auto h-64`} alt={title} />
                    <p>Read Case Study</p>
                </div>
            </Link>
        </div>
    )
}

CaseStudyButton.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};