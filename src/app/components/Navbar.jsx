import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-700 py-4 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="text-3xl font-bold text-white">Students track</h3>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href="/new" className="text-white hover:underline">
              Añadir nuevo estudiante
            </Link>
          </li>
          <li>
            <Link href="/students" className="text-white hover:underline">
              Ver el registro de estudiantes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
