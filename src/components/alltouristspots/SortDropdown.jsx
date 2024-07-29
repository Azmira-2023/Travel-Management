

const SortDropdown =  ({ sortOption, setSortOption }) => {
    return (
        <div className="mb-4">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700">Sort by Average Cost:</label>
            <select 
                id="sort" 
                name="sort" 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
};
export default SortDropdown