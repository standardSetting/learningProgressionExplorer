import { useState } from 'react'

function AccessPage(props){
    
    const [inputFieldValue, setInputFieldValue] = useState('')
    const setCanAcces = props.setCanAcces

    function handleAccessCode(e){
        let value = e.target.value
        setInputFieldValue(value)
        if (value === '453798')
            setCanAcces(true)
    }
    return (
        <div className='bg-purple' style={{width: '100vw', height: '100vh'}}>
            <div className='modal'>
                <div className='white f4'>
                    Learning Progression Explorer Development
                </div>
                <input 
                    className='mt2 tc f5' 
                    placeholder="Access code"
                    style={{width:"100%"}}
                    onChange={handleAccessCode}
                    value={inputFieldValue}
                />
            </div>
        </div>
    )
}

export default AccessPage