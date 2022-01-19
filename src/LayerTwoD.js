import { useState } from 'react'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import LayerTwoText from './LayerData/LayerTwo.json'
import SliderNavigation from './Shared/SliderNavigation'



function MenuItem(props){

    const title = props.title
    const selectedMenuItem = props.selectedMenuItem
    const setSelectedMenuItem = props.setSelectedMenuItem
    
    let isBold = title === selectedMenuItem ? 'b' : ''

    function handleMenuClick(e){
        setSelectedMenuItem(e.target.value)
    }

    return (
        <input 
            className={'mt3 f6 purple bg-white b--none pointer '+isBold} 
            value={title} 
            type='button'
            onClick={handleMenuClick}/>
    )
}

function LevelCard(props){
    const [selectedMenuItem, setSelectedMenuItem] = useState('Conceptual understanding')
    const levelCardIndex = props.levelCardIndex

    return (
        <div className='bg-white'>
            <div style={{width: '700px', 'margin-top':'10vh','margin-bottom':'10vh'}}>
                <div className='flex flex-row'>
                    <div className='flex flex-column'>
                        <div className='shadow-4 ba b--purple' >
                            <div className='bg-almost-pink purple b w4 pa3'style={{width: '700px', height:'65px'}}>
                                {levelCardIndex+'. '+LayerTwoText[levelCardIndex-1]['Nutshell statement']}
                            </div>
                            <div className='mb4'>
                                <div className='flex flex-row justify-around'>
                                    <MenuItem title='Conceptual understanding' selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
                                    <MenuItem title='Procedural fluency' selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
                                    <MenuItem title='Strategic competence' selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
                                    <MenuItem title='Adaptive reasoning' selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
                                </div>
                            </div>
                            <div className='dark-gray ml4 mr4 mb4'>
                                {LayerTwoText[levelCardIndex-1][selectedMenuItem]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function LayerTwoD(props){
    
    var levelCards = []
    for (let i=12; i>0; i--){
        levelCards.push(<LevelCard levelCardIndex={i}/>)
    }

   
    setTimeout(()=>{window.scrollTo(0,10000)},0)

    return (
        <div className='bg-near-white'>
            <div className='flex justify-center'>
                <div className='bg-white shadow-4 b--purple bw2 bl ml5 mr5 ' style={{'max-width': '1024px','min-width':'1024px'}}>
                    <div className='flex justify-center'>
                        <div>
                            {levelCards}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayerTwoD