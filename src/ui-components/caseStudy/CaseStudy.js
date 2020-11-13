import React from 'react';
import PropTypes from 'prop-types';

export function CaseStudy({title, description}) {
    return (
        <div>
            <a href="google.com" className={`box-border max-w-2xl m-auto`}>
                <div className={`h-full w-full p-8 border-solid border rounded-md border-gray-500`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}

CaseStudy.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};