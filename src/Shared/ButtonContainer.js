function ButtonContainer(props) {
    return (
        <div className="f5 no-underline purple inline-flex items-center pa3 ba border-box b--purple">
            {props.children}
        </div>
    );

}

export default ButtonContainer;