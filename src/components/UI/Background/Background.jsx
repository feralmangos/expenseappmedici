import './Background.css'

const Background = () => {
    return (
        <div className='background'>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop"></div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" ></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Background;