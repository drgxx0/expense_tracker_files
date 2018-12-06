import React from 'react'

import './modal.css'

const Modal = ({ modalManage, children, handleError }) => {
    const closing = () => {
        modalManage(false)
        handleError(false)
    }
    return (
        <React.Fragment>
            <div className='modal'>
                <div className='backdrop' onClick={closing}></div>
                    <div className='modalBox'>{children}</div>
            </div>
        </React.Fragment>
    )
}

export default Modal