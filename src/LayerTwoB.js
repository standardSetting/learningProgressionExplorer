import { useState } from 'react'

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

function LevelCardTop(props){
    const levelCardIndex = props.levelCardIndex
    
    return (
        <div className='bg-white'>
            <div style={{width: '700px', 'margin-bottom':'1vh'}}>
                <div className='shadow-4 bb br bl b--purple' style={{height:'13vh'}}>
                    <div className='f6 dark-gray mb2 ml4 mr4 mt1'>
                        {LayerTwoText[levelCardIndex-1].adaptiveReasoning}
                    </div>
                </div>
            </div>
        </div>
    )
}

function LevelCardBottom(props){
    const levelCardIndex = props.levelCardIndex
    
    return (
        <div className='bg-white'>
            <div style={{width: '700px', 'margin-bottom':'1vh'}}>
                <div className='shadow-4 bt br bl b--purple'>
                    <div className='bg-almost-pink purple b pa3' style={{width: '698px'}}>
                        {levelCardIndex+'. '+LayerTwoText[levelCardIndex-1].nutshellStatement}
                    </div>
                </div>
            </div>
        </div>
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


function LayerTwoB(props){
    
    const [levelSelect, setLevelSelect] = useState(1)

    return (
        <div className='bg-near-white' style={{width: '100vw', height:'100vh'}}>
            <div className='flex justify-center'>
                <div className='bg-white shadow-4 b--dark-gray ml5 mr5' style={{'max-width': '1024px','min-width':'1024px', height:'100vh'}}>
                    <div className='sliderOuterContainer'>
                        <div className='sliderContainer'>
                            <div className='flex justify-between'>
                                <SliderNavigation 
                                    levelSelect={levelSelect}
                                    setLevelSelect={setLevelSelect}
                                />
                                <div className='flex flex-column justify-between'>
                                    <div>
                                        <LevelCard levelCardIndex={levelSelect}/>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayerTwoB