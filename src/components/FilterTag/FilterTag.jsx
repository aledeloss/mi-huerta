import "./FilterTag.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FilterTag = ({ tagName, handleDeleteTagCLick }) => {

    const handleClick = () => {
        alert('click')
    }

  return (
    <span className="filter-tag">
      {tagName}
      {/*<div className="filter-tag__delete-icon" onClick={handleClick}>
         <FontAwesomeIcon icon={faTimes} />
      </div> */}
    </span>
  );
};

export default FilterTag;
