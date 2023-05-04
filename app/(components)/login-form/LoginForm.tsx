import Link from "next/link"

import SignInBtn from "./SignInBtn"
import PasswordInput from "./PasswordForm"
import EmailInput from "./EmailForm"

const LoginForm = () => {

  return (
    <form
      className="grid gap-3">
      <EmailInput />
      <PasswordInput />
      <div className="flex gap-6">
        <SignInBtn />
        <div className="text-sm">
          <p className="font-light">New Customer? <Link className="underline text-beige hover:text-[#d8b8af]" href={'/'}>Create account</Link></p>
          <Link className="underline text-beige hover:text-[#d8b8af]" href={'/'}>Forgot your password?</Link>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
