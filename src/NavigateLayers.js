import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function NavigationLayersButton(props){
    const handleClick = props.handleClick
    const value = props.value

    return (
        <input 
            className='w3 h2 ba pa1 gray tc pointer' 
            type='button' 
            value={value} 
            onClick={handleClick}/>
    )
}

function NavigateLayers(props){
    
    const setLayerDisplayCode = props.setLayerDisplayCode

    function handleClick(e){
        setLayerDisplayCode(e.target.value)
        // if (e.target.value === 'L2D') 
        //     setTimeout(()=>{scroll.scrollToBottom({smooth: true})},0)
    }

    return (
        <div className='ma3 flex flex-column' style={{position: 'sticky'}}>
            <NavigationLayersButton value='L1' handleClick={handleClick}/>
            <NavigationLayersButton value='L2A' handleClick={handleClick}/>
            <NavigationLayersButton value='L2B' handleClick={handleClick}/>
            <NavigationLayersButton value='L2C' handleClick={handleClick}/>
            <NavigationLayersButton value='L2D' handleClick={handleClick}/>
            <NavigationLayersButton value='L2E' handleClick={handleClick}/>
            <NavigationLayersButton value='L2F' handleClick={handleClick}/>
            <NavigationLayersButton value='L2G' handleClick={handleClick}/>
            <NavigationLayersButton value='L3' handleClick={handleClick}/>
            <NavigationLayersButton value='L4' handleClick={handleClick}/>
        </div>
    )
}

export default NavigateLayers