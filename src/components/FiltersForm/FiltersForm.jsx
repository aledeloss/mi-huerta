import { useState } from "react";
import "./FiltersForm.css";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FiltersForm = () => {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const date = new Date();
  const [filters, setFilters] = useState([date.toLocaleString('default', { month: 'long' })]);

  // const handleDifficultyChange = (evt) => {
  //   console.log(evt.target.value);
  // };

  const handleInputChange = (evt) => {
    if (filters.includes(evt.target.name)) {
      setFilters(filters.filter((filter) => filter !== evt.target.name));
    } else {
      setFilters([...filters, evt.target.name]);
    }
  };

  const handleSubmit = () => {
    console.log(filters);
  };

  const checkBoxesList = months.map((month, index) => (
    <Form.Check
      key={index}
      type="checkbox"
      inline
      name={month}
      label={month}
      onChange={handleInputChange}
      checked={filters.includes(month) ? true : false}
    />
  ));

  console.log(checkBoxesList);

  return (
    <div className="filters-container">
      <div className="filter-title">
      Filtros - Próximamente <FontAwesomeIcon icon={faFilter} />
      </div>
      <Form className="filters-items">
        {/* <Form.Group
        controlId="exampleForm.ControlSelect1"
        className="difficulty-filter-container"
      >
        <Form.Label>Dificultad</Form.Label>
        <Form.Control as="select" onChange={handleDifficultyChange}>
          <option>Fácil</option>
          <option>Moderada</option>
          <option>Difícil</option>
        </Form.Control>
      </Form.Group> */}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Mes</Form.Label>
          <div className="checkboxes-container">
            {checkBoxesList}
            <Form.Check
              type="checkbox"
              inline
              name="Todos"
              label="Todos"
              onChange={handleInputChange}
            />
          </div>
        </Form.Group>
        <Button className="submit-button ml-1" onClick={handleSubmit}>
          Aceptar
        </Button>
      </Form>
    </div>
  );
};

export default FiltersForm;
