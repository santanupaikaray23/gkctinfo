import React from 'react';
import ServiceSearch from '../../ServiceSearch';
import ServiceQuickSerch from '../../ServiceQuickSearch';
import QuickSearch from '../../QuickSearch';

const Service = () => {
    return(
       <>
       <ServiceSearch/>
        <QuickSearch/>
        <ServiceQuickSerch/>
        </>
    )
}

export default Service;