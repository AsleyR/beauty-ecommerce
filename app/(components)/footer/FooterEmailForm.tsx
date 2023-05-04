"use client"

import { useState } from "react";

interface EmailForm {
    input: {
        email: string
    }
}

const EmailForm = () => {
    const [input, setInput] = useState<EmailForm['input']>({
        email: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value.toString()
        })
    }

    return (
        <form action="GET" onSubmit={(e) => { e.preventDefault(); }}
            className="flex lg:flex-col gap-3 w-full h-full"
        >
            <input
                className={`
                focus:outline-none active:outline-none w-full
                px-5 py-3 border border-black placeholder:tracking-wider
                placeholder:font-light
                `}
                placeholder="Email address"
                value={input.email}
                onChange={handleChange}
                name="email"
                id="email"
                type={'email'}
            />
            <div className="flex-none md:flex">
                <button
                    className="font-bold text-white bg-black hover:bg-beige active:scale-95 px-5 py-3 tracking-widest transition-all"
                    name="sign-up-btn"
                    type={'submit'}>
                    SIGN UP
                </button>
            </div>
        </form>
    )
}

export default EmailForm