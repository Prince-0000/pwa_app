import Link from "next/link"

const Docs = () => {
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="md:text-3xl sm:text-2xl text-xl text-yellow-400 font-bold">About page</h1>
            <Link href="/" className="md:text-2xl sm:text-xl font-medium">Home Page</Link>
        </div>
    )
}
export default Docs;