/* eslint-disable react/prop-types */


const SearchBar = ({handleSearch}) => {


  return (
    <div className="max-w-md ">
      <form onSubmit={handleSearch}  className="flex items-center border border-gray-300 rounded-md shadow-sm">
        <input
        name="search"
          type="text"
          placeholder="Search..."
          className="flex-grow p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
