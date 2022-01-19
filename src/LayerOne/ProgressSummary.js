function ProgressSummary(props){

    return (
        <div>
            <div className='purple f4 mt4 fade-in-text'>Progress in the four competencies</div>
            <div className='mt3 dark-gray fade-in-text'>The four competencies used in ACER's learning progression are given below.  The nature of progress in each of them is also described.</div>
            <ul>
                <li className='mt2 fade-in-text'><strong>Conceptual understanding</strong> refers to understanding of mathematical concepts, operations and relations. It both supports and is supported by mathematical language and representations. </li>
                <li className='mt2 fade-in-text'><strong>Procedural fluency</strong> refers to carrying out mathematical procedures accurately and efficiently, where necessary combining procedures or adapting a procedure to suit a situation. Procedural fluency uses mathematical definitions, conventions, axioms, models and representations.</li>
                <li className='mt2 fade-in-text'><strong>Strategic competence</strong> refers to selecting and executing an approach to complete a task. It includes planning, problem formulation, mathematising including selecting or devising suitable mathematical representations, and monitoring and evaluating progress towards a goal.</li>
                <li className='mt2 fade-in-text'><strong>Adaptive reasoning</strong> refers to logical, purposeful and generative thought, including deductive, inductive and analogical reasoning. It draws on communication skills as reasoning is expressed and as conclusions are justified.</li>
            </ul>
        </div>
    )
}

export default ProgressSummary