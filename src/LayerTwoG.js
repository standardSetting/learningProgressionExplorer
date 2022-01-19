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


function NutshellStatement(props){
    const index = props.index
    const statement = props.statement
    const levelSelect = props.levelSelect

    let isBold = index === levelSelect ? "b" : ""

    return (
        <div className={'ml2 '+isBold} style={{height:'2vh'}}>{index+' '+statement}</div>
    )
}

function LayerTwoG(props){
    
    const [levelSelect, setLevelSelect] = useState(1)

    let levelNutShells = LayerTwoText.map( (e,i) => {
        return (<NutshellStatement statement={e['Nutshell statement']} index={i+1} levelSelect={levelSelect}/>)
    }).reverse()

    let tickMarks = []
    for (let i=0; i<12; i++) 
        tickMarks.push(<div className='purple f4 b'>-</div>)

    return (
        <div className='bg-near-white' style={{width: '100vw', height:'100vh'}}>
            <div className='flex justify-center'>
                <div style={{width: '80vw'}}>
                    <div className='flex justify-around'>
                        <div className='flex justify-center'>
                            <div className='bg-white shadow-4 b--dark-gray ml5 mr5' style={{'width':'600px', height:'100vh'}}>
                                <div className='sliderOuterContainer'>
                                    <div className='sliderContainer'>
                                        <div className='flex justify-between'>
                                            <div className='flex flew-row'>
                                                <SliderNavigation 
                                                    levelSelect={levelSelect}
                                                    setLevelSelect={setLevelSelect}
                                                />
                                                <div className='flex flex-column justify-between dark-gray mb1 mt1'>
                                                    {tickMarks}
                                                </div>
                                                <div className='flex flex-column justify-between dark-gray mt2 mb2'>
                                                    {levelNutShells}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{height:"450px"}}>
                            <LevelCard levelCardIndex={levelSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayerTwoG