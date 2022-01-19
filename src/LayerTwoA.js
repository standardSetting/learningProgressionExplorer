import { useState } from 'react'

import LayerTwoText from './LayerData/LayerTwo.json'
import SliderNavigation from './Shared/SliderNavigation'

function LevelNutShell(props){
    const index = props.index
    const statement = props.statement
    return (
        <div className='flex flex-row items-center'>
            <div className='purple f5' style={{width:'2.5vw'}}>
                {"-"+" "+index}
            </div>
            <div className='purple b f5 flex items-center'style={{width: '800px', height:'7vh'}}>
                    {statement}
            </div>
        </div>
    )
}

function LayerTwoA(props){
    
    let levelNutShells = LayerTwoText.map( (e,i) => {
        return (<LevelNutShell statement={e['Nutshell statement']} index={12-i}/>)
    })
    return (
        <div className='bg-near-white' style={{width: '100vw', height:'100vh'}}>
            <div className='flex justify-center'>
                <div className='bg-white shadow-4 ml5 mr5 bl bw2 b--purple' style={{'max-width': '1024px','min-width':'1024px', height:'100vh'}}>
                    <div className='flex flex-column justify-around' style={{height:'100vh'}}>
                        {levelNutShells}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayerTwoA