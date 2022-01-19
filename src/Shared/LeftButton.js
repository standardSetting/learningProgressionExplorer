import ButtonContainer from "./ButtonContainer";
import ArrowLeft from "./ArrowLeft";

function LeftButton(props){
    return (
        <div style={{width: '116px'}}>
            <ButtonContainer>
                <ArrowLeft />
                <span className="pl1 b">Previous</span>
            </ButtonContainer>
        </div>
    );
}

export default LeftButton