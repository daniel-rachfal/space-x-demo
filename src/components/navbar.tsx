import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row justify-between bg-gray-900 min-h-16 text-white items-center px-6 py-4 lg:py-0 gap-4">
      <div>
        <Link href="/" className="text-3xl font-bold hover:underline">
          SpaceX Demo
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
        <Link href="/dragons" className="hover:underline">
          Dragons
        </Link>
        <Link href="/launches" className="hover:underline">
          Launches
        </Link>
      </div>
    </nav>
  );
}
