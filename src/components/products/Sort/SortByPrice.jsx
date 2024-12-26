/* eslint-disable react/prop-types */
const SortByPrice = ({setSort}) => {
  return (
    <select className="max-w-xs select select-info" onChange={(e)=>setSort(e.target.value)}>
      
      <option disabled selected>Sort by Price</option>
      <option value={'asc'}>Low To High</option>
      <option value={'desc'}>HIgh To Low</option>
    
    </select>
  );
};

export default SortByPrice;
