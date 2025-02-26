import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="bg-black/20 backdrop-blur-lg rounded-full px-8 py-4">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="text-white font-medium px-4 py-2 rounded-full bg-white/10"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="text-white/80 hover:text-white transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white/80 hover:text-white transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/notes"
              className="text-white/80 hover:text-white transition-colors"
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className="text-white/80 hover:text-white transition-colors"
            >
              Résumé
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
