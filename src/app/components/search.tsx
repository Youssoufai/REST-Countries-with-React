const Search = () => {
    return (
        <>
            <div>
                <input type="text" name="search" />
            </div>
            <div>
                <select name="filter">
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </>
    )
}
export default Search;