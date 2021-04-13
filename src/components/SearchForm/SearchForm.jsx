import React, {useState}  from "react";
import "./SearchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl, Button } from "react-bootstrap";
import data from "../../data/data.js";

const SearchForm = ({ history }) => {

    let [keyword, setKeyword] = useState("");
    //TODO: Hacer keyword context para poder buscar desde toda la app.
    
    const handleChange = evt => {
      setKeyword(evt.target.value)
    }
  
    const handleSubmit = evt => {
      evt.preventDefault()
      if(data.find( e => e.name === keyword)){
      history.push(`/detail/${keyword}`);
      }
      else { console.log("Nop")}
      // setKeyword(keyword.replace(keyword[0], keyword[0].toUpperCase()));
      // console.log(keyword);
    }
  // TODO: Agregar mensaje de no se encontró.

    return (
        <Form className="search-form-container" inline onSubmit={handleSubmit}>
        <FormControl 
          type="text" 
          placeholder="Buscar planta" 
          className="search-input" 
          value={keyword} 
          onChange={handleChange}
        />
        <Button className="submit-button ml-1" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
    )
}

export default SearchForm;