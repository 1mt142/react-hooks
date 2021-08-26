import React from 'react'

function PropsTest(props) {
    return (
        <div>
            <p>This is {props.itemOne} === That is {props.itemTwo}</p>
        </div>
    )
}

export default PropsTest
