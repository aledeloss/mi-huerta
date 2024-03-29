import { useState } from "react";
import "./FiltersForm.scss";
import { Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterTag from "../FilterTag/FilterTag";
import { months } from "./filterConstants";

const FiltersForm = ({ handleInputChange, filters }) => {
  const [visibleFilters, setVisibleFilters] = useState(false);

  const handleClickHideFilters = () => {
    setVisibleFilters(!visibleFilters);
  };

  const renderCheckBoxes = months.map((month, index) => (
    <Form.Check
      key={index}
      type="checkbox"
      inline
      name={month}
      label={month}
      onChange={handleInputChange}
      checked={filters.includes(month)}
    />
  ));

  const renderTags = filters.map((filter, index) => (
    <FilterTag tagName={filter} key={filter} />
  ));

  return (
    <div className="filters">
      <div className="filters__title" onClick={handleClickHideFilters}>
        Filtros
        <FontAwesomeIcon icon={faFilter} />
      </div>
      <Form
        className={`filters__items ${
          visibleFilters && "filters__items--visible"
        }`}
      >
        <Form.Group controlId="formBasicCheckbox">
          <div className="filters__checkboxes">{renderCheckBoxes}</div>
        </Form.Group>
      </Form>
      <Row className="filters__tags">{renderTags}</Row>
    </div>
  );
};

export default FiltersForm;
