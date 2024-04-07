import React from 'react';
import ServiceSearch from '../../ServiceSearch';
import ServiceQuickSerch from '../../ServiceQuickSearch';

const Service = () => {
    return(
        <div className="work" id="work">
        <div>
            <ServiceSearch/>
            <ServiceQuickSerch/>
        </div>
        </div>
    )
}

export default Service;