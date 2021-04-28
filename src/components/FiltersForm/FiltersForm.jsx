import { useState, useContext } from "react";
import "./FiltersForm.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterTag from "../FilterTag/FilterTag";
// import FiltersContext from "../../contexts/FiltersContext";

const FiltersForm = ({ handleInputChange, filters }) => {

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
  const [visibleFilters, setVisibleFilters] = useState(false);

  const handleClickHideFilters = () => {
    setVisibleFilters(!visibleFilters)
  }

  const renderCheckBoxes = months.map((month, index) => (
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

  const renderTags = filters.map((filter,index) => (
    <FilterTag tagName={filter} key={index} />
  ))

  return (
    <div className="filters-container">
      <div className="filter-title" onClick={handleClickHideFilters}>
      Filtros - Próximamente <FontAwesomeIcon icon={faFilter} />
      </div>
      <Form className={`filters-items ${visibleFilters && 'visible-filters'}`} >
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Mes</Form.Label>
          <div className="checkboxes-container">
            {renderCheckBoxes}
          </div>
        </Form.Group>
      </Form>
      <div className="tags-container">
        {renderTags}
      </div>
    </div>
  );
};

export default FiltersForm;
