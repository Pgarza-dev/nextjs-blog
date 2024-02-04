import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto p-4">
            <Link href="/" className="font-bold text-3xl">
                Pablo <span className="text-blue-500">The Scarecrow</span> Garza
            </Link>
        </nav>
    );
    }