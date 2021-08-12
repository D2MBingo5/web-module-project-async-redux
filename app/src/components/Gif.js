import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Gif = (props) => {
    const { gif, isFetching, error } = props

    if (error) {
        return <h2>Error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Getting your gif</h2>
    }

    return (
        <div>
            <h2>Your gif!</h2>
        </div>
    )

}

export default Gif