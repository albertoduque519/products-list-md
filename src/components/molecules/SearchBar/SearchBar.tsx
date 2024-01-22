import Input from "@app/components/atoms/Input/Input";
import Button from "@app/components/atoms/Button/Button";
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