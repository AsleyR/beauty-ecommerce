const EmailInput = () => {
    return (
        <input
            className={`
            focus:outline-none active:outline-none w-full
            border border-black/30 rounded-sm
            px-3 py-3 
            placeholder:tracking-wider placeholder:font-light
            `}
            name="email"
            id="email"
            type={'email'}
            placeholder="Email"
        />
    )
}

export default EmailInput
