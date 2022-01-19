import ReactSlider from "react-slider";

function SliderNavigation(props){

    const levelSelect = props.levelSelect
    const setLevelSelect = props.setLevelSelect

    function handleSliderChange(newLevelSelect){
        setLevelSelect(newLevelSelect)
    }
    
    const tickMarkDisplayOnSliderStyle = {
        'width':'0.2vw'
    }

    const tickMarkDisplayDivs = []
    // const bookmarkLabels = bookmarks.map(b => b.label)

    // for (let i=0; i<maxItemNavNumber; i++){
    //     let colour = '#F4F4F4'
    //     let bookmarkPresent = bookmarkPlacements[maxItemNavNumber - i - 1] !== ''
        
    //     if (bookmarkPresent){
    //         let bookmarkIndex = bookmarkLabels.indexOf(bookmarkPlacements[maxItemNavNumber - i - 1])
    //         colour = bookmarks[bookmarkIndex].colour
    //     }
        
    //     let scaleFactor
    //     if (maxItemNavNumber < 100) scaleFactor = 72.06708 + (206.8487 - 72.06708)/(1 + (maxItemNavNumber/0.9524207)**1.190332)
    //     if (maxItemNavNumber >= 100) scaleFactor = 72

    //     tickMarkDisplayDivs.push(
    //         <div className='f3 w1 b' style={{'color':colour, 'position':'absolute', 'top':`${19.5+(scaleFactor*i)/maxItemNavNumber}vh`}}>
    //             {true && <div>&mdash;</div>}
    //         </div>)
    // }
    
    return (
        <div className='sliderOuterContainer'>
            <div className='sliderContainer'>
                <div className='flex flex-row'>
                    <ReactSlider
                        className="slider flex justify-center"
                        thumbClassName="thumb flex justify-center tc"
                        trackClassName="track"
                        renderThumb={(props, state) => <div {...props}>{state.value}</div>}
                        orientation="vertical"
                        invert
                        min={1}
                        value={levelSelect}
                        max={12}
                        onChange={handleSliderChange}
                    />
                    {/* <div style={bookmarkDisplayOnSliderStyle}>
                        {tickMarkDisplayDivs}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SliderNavigation