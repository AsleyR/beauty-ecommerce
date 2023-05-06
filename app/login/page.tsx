import Footer from "../(components)/footer/Footer"
import LoginForm from "../(components)/form/login-form/LoginForm"

const page = () => {
    return (
        <div className="flex flex-col">
            <div className="mx-mobilex lg:mx-auto my-[6rem] flex flex-col gap-5">
                <h1 className="font-medium text-center text-3xl tracking-wider">Login</h1>
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
}

export default page
