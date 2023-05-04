const XMarkIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
            <title>Close icon</title>
            <path d="M17 1L1 17M1 1l16 16" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"></path>
        </svg>
    )
}

export default XMarkIcon