const UserIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <title>Account icon</title>
            <path d="M20.5 19.5V21.525C20.5 21.5802 20.4552 21.625 20.4 21.625H3.6C3.54477 21.625 3.5 21.5802 3.5 21.525V19.5C3.5 18.3728 3.94777 17.2918 4.7448 16.4948C5.54183 15.6978 6.62283 15.25 7.75 15.25H16.25C17.3772 15.25 18.4582 15.6978 19.2552 16.4948C20.0522 17.2918 20.5 18.3728 20.5 19.5Z" stroke="currentColor" stroke-width="1.75"></path>
            <path d="M12 11C14.3472 11 16.25 9.09721 16.25 6.75C16.25 4.40279 14.3472 2.5 12 2.5C9.65279 2.5 7.75 4.40279 7.75 6.75C7.75 9.09721 9.65279 11 12 11Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"></path>
        </svg>
    )
}

export default UserIcon