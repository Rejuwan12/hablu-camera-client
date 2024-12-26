/* eslint-disable react/prop-types */
import { TbFilter } from "react-icons/tb";

const FilterBar = ({setBrand, setCategory,handleReset}) => {
  return (
    <div className="h-full min-h-screen bg-gray-200">
      <div className="flex items-center justify-center gap-2 p-4">
        <TbFilter />
        <h2 className="text-xl font-bold">Filter</h2>
      </div>
      <div className="flex flex-col items-center gap-2 p-2 mt-2">
        <div className="w-full">
          <select className="w-full select select-info" onChange={e => setBrand(e.target.value)}>
            <option disabled selected>Brand</option>
            <option value={"asc"}>Low To High</option>
            <option value={"desc"}>HIgh To Low</option>
          </select>
        </div>
        <div className="w-full">
          <select className="w-full select select-info" onChange={e => setCategory(e.target.value)}>
          <option disabled selected>Category</option>
            <option value={"asc"}>Low To High</option>
            <option value={"desc"}>HIgh To Low</option>
          </select>
        </div>
      </div>
      <button className="w-full mt-4 btn btn-error btn-outline" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FilterBar;
