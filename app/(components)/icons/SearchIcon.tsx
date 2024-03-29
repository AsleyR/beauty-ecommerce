const SearchIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
            <title>Search icon</title>
            <path d="M19.5 21.5L13.6155 15.1628" stroke="currentColor" strokeWidth="1.75"></path>
            <circle cx="9.5" cy="9.5" r="7" stroke="currentColor" strokeWidth="1.75"></circle>
        </svg>
    )
}

export default SearchIcon