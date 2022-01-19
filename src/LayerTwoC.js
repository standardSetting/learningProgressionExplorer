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


function LayerTwoC(props){
    
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

export default LayerTwoC