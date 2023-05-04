const PasswordInput = () => {
    return (
        <input
            className={`
            focus:outline-none active:outline-none w-full
            border border-black/30 rounded-sm
            px-3 py-3 
            placeholder:tracking-wider placeholder:font-light
            `}
            placeholder="Password"
            name="password"
            id="password"
            type={'password'}
        />
    )
}

export default PasswordInput
