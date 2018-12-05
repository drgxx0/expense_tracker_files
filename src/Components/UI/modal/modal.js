import React from 'react'

import './modal.css'

const Modal = (props) => {
    return (
        <React.Fragment>
            <div className='modal'>
                <div className='backdrop' onClick={() => props.onCloseModal(false)}></div>
                    <div className='modalBox'>{props.children}</div>
            </div>
        </React.Fragment>
    )
}

export default Modal