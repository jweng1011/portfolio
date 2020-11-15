import { React } from 'react';

export function CaseRole({role, roleDescription, timeline, timeDescription}) {
    const styling = "rounded-md bg-gray-100";

    return (
        <div className={`${styling} md:max-w-2xl md:m-auto h-full w-full p-8 flex-row flex space-x-6`}>
            <div className={`w-2/3 space-y-3`}>
                <h6>My Role</h6>
                <div>
                    <h5>{role}</h5>
                    <p>{roleDescription}</p>
                </div>
            </div>
            <div className={`w-1/3 space-y-3`}>
                <h6>Project Timeline</h6>
                <div>
                    <h5>{timeline}</h5>
                    <p>{timeDescription}</p>
                </div>
            </div>
        </div>
    )
}
