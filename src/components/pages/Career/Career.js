import React from 'react';
import CareerSearch from '../../CareerSearch';
import CareerQuickSearch from '../../CareerQuickSearch';
const Career = () => {
    return(
        <div className="career" id="career">
        <div>
            <CareerSearch/>
            <CareerQuickSearch/>
        </div>
        </div>
    )
}

export default Career;