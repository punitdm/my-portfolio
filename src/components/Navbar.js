export default function Navbar() {
    return(
        <nav className="flex justify-between items-center px-32 py-4 bg-[#4241427d] shadow">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <ul className="flex gap-6">
                <li><a href="/" className="hove:text-blue-500">Home</a></li>
                <li><a href="/about" className="hove:text-blue-500">About Me</a></li>
                <li><a href="/projects" className="hove:text-blue-500">Projects</a></li>
                <li><a href="/contact" className="hove:text-blue-500">Contact</a></li>
            </ul>
            <button>⚙️</button>
        </nav>
    );
}

