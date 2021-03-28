import React, {useState}  from "react";
import "./SearchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl, Button } from "react-bootstrap";
import data from "../../data/data.js";

const SearchForm = ({ history }) => {

    let [keyword, setKeyword] = useState("");
    //TODO: Hacer keyword context para poder buscar desde toda la app.
  
    const handleSubmit = evt => {
      evt.preventDefault()
      if(data.find( e => e.nombre === keyword)){
      history.push(`/detail/${keyword}`);
      }
      else { console.log("Nop")}
      // setKeyword(keyword.replace(keyword[0], keyword[0].toUpperCase()));
      // console.log(keyword);
    }
  // TODO: Agregar mensaje de no se encontró.
  
    const handleChange = evt => {
      setKeyword(evt.target.value)
    }
  
    return (
        <Form inline onSubmit={handleSubmit}>
        <FormControl 
          type="text" 
          placeholder="Buscar hortaliza" 
          className="mr-sm-2" 
          value={keyword} 
          onChange={handleChange}
        />
        <Button className="submit-button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
    )
}

export default SearchForm;