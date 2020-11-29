import React from 'react';

const Modal = ({regions, chooseRegion, isChoosen}) => {
    const renderRegions = () => {
        return regions.map(region => {
            return <p 
                    onClick={() => { chooseRegion(region)}}
                    key={region._id}>{region.name}</p>
        })
    }
    console.log(isChoosen)
    return (
        <div className={isChoosen ? 'modal__wrapper hidden' : 'modal__wrapper'}>
            <div className="modal__wrapper--content">
                <h1>Chọn nơi gần bạn </h1>
                {renderRegions()}
            </div>
        </div>
    )
}

export default Modal;