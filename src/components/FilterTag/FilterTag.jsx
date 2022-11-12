import './FilterTag.scss';

const FilterTag = ({ tagName, handleDeleteTagCLick }) => {
  return <span className='filter-tag'>{tagName}</span>;
};

export default FilterTag;
