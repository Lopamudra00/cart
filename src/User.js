import React from 'react';
const User = (props) => {
    const { data } = props;
    return (
        <div>
            <h1>User component</h1>
            <h4>{data.myName}</h4>
            <h4>{data.age}</h4>
            <h4>{data.gender}</h4>

        </div>
    )
}
export default User;