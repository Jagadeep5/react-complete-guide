import React from 'react';

const WithClassAuxi = (props) => {
    return (
        <div className={props.className}>
            { props.children }
        </div>
    )
}

export default WithClassAuxi;