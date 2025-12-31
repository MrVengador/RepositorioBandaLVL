const SearchBar = ({
    value,
    onChange,
    placeholder = "Buscar por nombre",
    id = "buscador"
}) => {
    return (
        <section className="row mb-5" id={id}>
            <div className="col-md-8 offset-md-2">
                <form
                    className="d-flex"
                    role="search"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="form-control form-control-lg"
                        type="search"
                        placeholder={placeholder}
                        aria-label="Search"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </form>
            </div>
        </section>
    );
};

export default SearchBar;
