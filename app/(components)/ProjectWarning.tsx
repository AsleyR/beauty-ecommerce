import Link from "next/link"

const ProjectWarning = () => {

    return (
        <div className="flex justify-center bg-[#1B2120] text-white text-center text-sm py-2">
            <p className="text-white"><span className="font-bold">Warning!</span> This is a mockup page. To see the real one click <Link target={'_blank'} href={'https://esqido.com/'} className="text-blue-400 hover:underline">here</Link>.</p>
        </div>
    )
}

export default ProjectWarning
