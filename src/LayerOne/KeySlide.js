function KeySlide(props){
    const title = props.title
    const paragraphTextArray = props.paragraphTextArray

    let paragraphs = paragraphTextArray.map(paragraph => <div className='mt3 dark-gray fade-in-text'>{paragraph}</div>)

    return (
        <div>
            <div className='purple f3 mt4 fade-in-text'>{title}</div>
            {paragraphs}
        </div>
    )
}

export default KeySlide