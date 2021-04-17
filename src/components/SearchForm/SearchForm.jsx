import React, { useState, useContext }  from "react";
import "./SearchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl, Button } from "react-bootstrap";
import data from "../../data/data.js";

const SearchForm = ({ history }) => {

    let [keyword, setKeyword] = useState("");
    
    const handleChange = evt => {
      setKeyword(evt.target.value)
    }
  
    const handleSubmit = evt => {
      evt.preventDefault()
      let correctedKeyword = keyword.replace(keyword[0], keyword[0].toUpperCase());
      if(data.find( e => e.name === correctedKeyword)){
        history.push(`/detail/${correctedKeyword}`);
        }
        else {
        history.push('/noresults');
        }
    }

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