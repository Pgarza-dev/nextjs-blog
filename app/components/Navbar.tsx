import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto p-4">
            <Link href="/" className="font-bold text-3xl">
                Pablo<span className="text-primary">The Scarecrow</span>Garza
            </Link>
            <ModeToggle />
        </nav>
    );
    }