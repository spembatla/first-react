import './Button.css';

function Button({children, ...rest}) {
    return <div>
        <button {...rest} className='custom-btn'>{children}</button>
    </div>
}

export default Button;