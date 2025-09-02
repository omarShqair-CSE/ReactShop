import React from 'react'

function Loader() {
    return (
        <div className='text-center' >
            <span className="spinner-border spinner-border-sm" aria-hidden="true" />
            <span className="visually-hidden" role="status">Loading...</span>
            {/* */}
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true" />
                <span role="status">Loading...</span>
            </button>
        </div>

    )
}

export default Loader