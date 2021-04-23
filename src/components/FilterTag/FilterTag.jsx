import "./FilterTag.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FilterTag = ({ tagName }) => {

    const handleClick = () => {
        alert('click')
    }

  return (
    <span className="tagname-container">
      {tagName}
      <div className="delete-filter-icon-container" onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </span>
  );
};

export default FilterTag;
