import ButtonContainer from "./ButtonContainer";
import ArrowRight from "./ArrowRight";

function RightButton(props){
    return (
        <div style={{width: '116px'}}>
            <ButtonContainer>
                <span className="pr1 b">Next</span>
                <ArrowRight />
            </ButtonContainer>
        </div>
    )
}

export default RightButton