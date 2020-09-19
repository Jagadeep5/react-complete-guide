import React from 'react';

const withClassAuxi2 = (WrapperComponent, data) => {
    return (props) => {
        return (
            <div className={data}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}

export default withClassAuxi2;