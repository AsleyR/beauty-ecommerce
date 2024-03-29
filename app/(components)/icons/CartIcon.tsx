const CartIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
            <title>Cart icon</title>
            <path d="M1.75 6.75H17.25V21.75H1.75V6.75Z" stroke="currentColor" stroke-width="1.5"></path>
            <path d="M13 10.5V5.5C13 2.83333 11.4444 1.5 9.5 1.5C7.55556 1.5 6 2.83333 6 5.5L6 10.5" stroke="currentColor" stroke-width="1.5"></path>
        </svg>
    )
}

export default CartIcon