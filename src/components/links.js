import React from 'react';
import DynamicLinks from './dynamicLinks';

export default function (props) {
    return (<div className="samsonau">
        <div>Hi, I am a developer at EPAM Systems. Someday I'll update this, but for now, please contact me via:</div>
        <DynamicLinks />
    </div>);
}