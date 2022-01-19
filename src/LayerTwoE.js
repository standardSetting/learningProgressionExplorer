import { useState } from 'react'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import LayerTwoText from './LayerData/LayerTwo.json'
import SliderNavigation from './Shared/SliderNavigation'



function LevelCardElement(props){
    const title = props.title
    const paragraph = props.paragraph
    return (
        <>
            <div className='mt3 ml3 purple'>
                {title}
            </div>
            <div className='f6 dark-gray mb2 ml4 mr4 mt1'>
                {paragraph}
            </div>
        </>
    )
}


function LevelCard(props){


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
                                <LevelCardElement title='Conceptual understanding' paragraph={LayerTwoText[levelCardIndex-1]['Conceptual understanding']}/>
                                <LevelCardElement title='Procedural fluency' paragraph={LayerTwoText[levelCardIndex-1]['Procedural fluency']}/>
                                <LevelCardElement title='Strategic competence' paragraph={LayerTwoText[levelCardIndex-1]['Strategic competence']}/>
                                <LevelCardElement title='Adaptive reasoning' paragraph={LayerTwoText[levelCardIndex-1]['Adaptive reasoning']}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function LayerTwoE(props){
    
    var levelCards = []
    for (let i=12; i>0; i--){
        levelCards.push(<LevelCard levelCardIndex={i}/>)
    }

   
    setTimeout(()=>{scroll.scrollToBottom({smooth: true, duration: 3000})},0)

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

export default LayerTwoE