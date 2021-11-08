import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
            {/* <h1>This is header heading</h1> */}
            <h1>{title}</h1>
            <Button color='lightblue' text='Hello' onClick = {onClick} />           
        </header>
    )
}

Header.defaultProps = {
    title:'Default Header'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
