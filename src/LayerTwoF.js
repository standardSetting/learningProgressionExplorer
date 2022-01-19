import { useState } from 'react'

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
            <div style={{width: '700px'}}>
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

function NutshellStatement(props){
    const index = props.index
    const statement = props.statement
    const levelSelect = props.levelSelect

    let isBold = index === levelSelect ? "b" : ""

    return (
        <div className={'ml2 '+isBold}>{index+' '+statement}</div>
    )
}

function LayerTwoF(props){
    
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
                <div className='bg-white shadow-4 b--dark-gray ml5 mr5' style={{'max-width': '1228px','min-width':'1100px', height:'100vh'}}>
                    <div className='sliderOuterContainer'>
                        <div className='sliderContainer'>
                            <div className='flex justify-between'>
                                <div className='flex flew-row'>
                                    <SliderNavigation 
                                        levelSelect={levelSelect}
                                        setLevelSelect={setLevelSelect}
                                    />
                                    <div className='flex flex-column justify-between o-50 mb1 mt1'>
                                        {tickMarks}
                                    </div>
                                    <div className='flex flex-column justify-between o-50 mt2 mb2'>
                                        {levelNutShells}
                                    </div>
                                </div>
                                <div className='modal'>
                                    <div style={{height:"450px"}}>
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

export default LayerTwoF