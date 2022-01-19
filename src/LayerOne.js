import { useState } from 'react'
import LeftButton from './Shared/LeftButton'
import RightButton from './Shared/RightButton'
import KeySlide from './LayerOne/KeySlide'
import ProgressSummary from './LayerOne/ProgressSummary'
import ProgressElement from './LayerOne/ProgressElement'

function LayerOne(props){

    
    const paragraphTextArrayA = [
        'Mathematics is a way of knowing and reasoning that uses symbols and logic to describe, relate and manipulate quantities and abstract objects, both in themselves and as representations of real-world phenomena.',
        'It provides a universal language to describe and interpret many aspects of reality including properties of objects; quantities, proportions and rates; the likelihood of future events governed by probabilistic rules; and the relationships among elements in a system (such as roads in a network, or steps in a coding algorithm). If people can use this universal language, they can generate their own descriptions and interpretations of these aspects of reality, as well as understand the descriptions and interpretations of others. Given that it is based on logic, mathematics can also cultivate in people the habits of logical thinking - habits that can be of great use in, for example, problem solving and decision making.',
        'Knowing how to use the universal language and logic of mathematics is clearly advantageous in many work situations. Yet it is also of value at a personal, day-to-day level for a number of reasons. For example, one cannot become financially literate, nor can one understand and evaluate statistical claims made in the media, without having a grounding in mathematics. Moreover, understanding mathematics and adopting mathematical ways of thinking often supports the effective and efficient use of many elements of technology that are central to our everyday lives, including communications technology, computing, internet searches and global positioning systems.'
    ]
    
    const paragraphTextArrayB = [
        'A typical learning progression for mathematics would see learners building and displaying their understanding of core mathematical concepts through manipulating physical objects, including through inspection, classification, sorting and ordering. As they undertake activity of this kind, they would be developing informal vocabulary to describe what they observe. They would then become more familiar with the formal mathematical language and approaches that are used with concepts of cardinality, magnitude, shape, location, pattern, regularity, chance and data both in concrete and abstract contexts. Later, they would be able to describe relationships among variables, between geometric objects, and between other mathematical structures such as points, vectors, sets and matrices. As they mature mathematically, they are able to solve complex problems using reasoning based on an increasing range of abstract and formal mathematical knowledge.'
    ]
    
    const paragraphTextArrayC = [
        "In the context of ACER's learning progression, progress in mathematics is considered from two perspectives. The first perspective considers progress as involving four interrelated competencies. The second perspective considers progress within three content areas that are commonly used to organise mathematics teaching and learning."
    ]
    
    const [slideNumber, setSlideNumber] = useState(1)

    function incrementSlide(){
        setSlideNumber(prevValue => prevValue + 1)
    }

    function decrementSlide(){
        setSlideNumber(prevValue => prevValue -1)
    }
    return (
        <div className='bg-near-white' style={{width: '100vw', height:'100vh'}}>
            <div className='flex justify-center'>
                <div className='mt5'>
                    <div >
                        <div className='bg-white ba b--dark-gray shadow-4 ml5 mr5' style={{'max-width': '1000px','min-width':'600px'}}>
                            <div className='ma5' style={{'margin-top':'10vh'}}>
                                <div className='purple f2'>ACER's learning progression for mathematics</div>
                                    <div>
                                        <div style={{'min-height':'400px'}}>
                                            {slideNumber === 1 && 
                                                <KeySlide title='Mathematics and its importance' paragraphTextArray={paragraphTextArrayA}/>}
                                            {slideNumber === 2 &&
                                                <KeySlide title='Developing proficiency in mathematics' paragraphTextArray={paragraphTextArrayB}/>}
                                            {slideNumber === 3 &&
                                                <KeySlide title='Unpacking the development of proficiency in mathematics' paragraphTextArray={paragraphTextArrayC}/>}
                                            {slideNumber === 4 &&
                                                <ProgressSummary />}
                                            {slideNumber === 5 && <ProgressElement />}
                                        </div>

                                        <div className=''>
                                            <div className='flex justify-between items-center'>
                                                {slideNumber > 1 &&
                                                    <div className='pointer' onClick={decrementSlide}>
                                                        <LeftButton />
                                                    </div>}
                                                {slideNumber === 1 && <div style={{width: '116px'}}></div>}
                                                <div className='purple'>
                                                    {slideNumber}/5
                                                </div>
                                                {slideNumber < 5 &&
                                                    <div className='pointer' onClick={incrementSlide}>
                                                        <RightButton />
                                                    </div>}
                                                {slideNumber === 5 && <div style={{width: '116px'}}></div>}
                                            </div>
                                        </div>

                                        {/* <div className='purple f3 mt4'>Developing proficiency in mathematics</div>
                                        <div className='mt2 dark-gray'>A typical learning progression for mathematics would see learners building and displaying their understanding of core mathematical concepts through manipulating physical objects, including through inspection, classification, sorting and ordering. As they undertake activity of this kind, they would be developing informal vocabulary to describe what they observe. They would then become more familiar with the formal mathematical language and approaches that are used with concepts of cardinality, magnitude, shape, location, pattern, regularity, chance and data both in concrete and abstract contexts. Later, they would be able to describe relationships among variables, between geometric objects, and between other mathematical structures such as points, vectors, sets and matrices. As they mature mathematically, they are able to solve complex problems using reasoning based on an increasing range of abstract and formal mathematical knowledge.</div>
                                    
                                        <div className='purple f3 mt4'>Unpacking the development of proficiency in mathematics</div>
                                        <div className='mt2 dark-gray'>In the context of ACER's learning progression, progress in mathematics is considered from two perspectives. The first perspective considers progress as involving four interrelated competencies. The second perspective considers progress within three content areas that are commonly used to organise mathematics teaching and learning.</div>

                                        <div className='purple f4 mt4'>Progress in the four competencies</div>
                                        <div className='mt2 dark-gray'>The four competencies used in ACER's learning progression are given below.  The nature of progress in each of them is also described.</div> */}

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayerOne