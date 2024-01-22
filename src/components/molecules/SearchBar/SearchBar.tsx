import Input from "../../atoms/Input/Input"
import Button from "../../atoms/Button/Button"
import './style.css'

const SearchBar = () => {
    const handleClick = () => {
       alert('Button clicked!');
    };

    return (
        <div className="searchBar">
            <Input type='text' placeholder='Buscar producto...' />
            <Button variant="light" icon="search" text="Buscar" onClick={handleClick}  />
        </div>
    )
}


export default SearchBar