import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between glass my-8 rounded-2xl max-w-7xl mx-auto">
      <div>
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
