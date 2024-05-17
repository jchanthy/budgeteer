function Header({title, darkMode, handleClick}){
    console.log('mycons:', title, handleClick, darkMode)
    return(
    <div className="header">
        <label for="">{title}</label>
        <button onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
    )
}
export default Header;