const Search = () => {
    return (
        <>
            <main className="flex justify-between p-7">
                <div>
                    <input type="text" name="search" className="border h-22 w-72 border-3 p-4 rounded bg-dark-elements" placeholder="Search for a country..." />
                </div>
                <div>
                    <select name="filter" className="bg-dark-elements p-4 rounded">
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </main>
        </>
    )
}
export default Search;