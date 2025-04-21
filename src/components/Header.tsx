import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">🛒 EcomVerse</h1>
      <nav className="space-x-4 text-white">
        <Link href="/user" className="hover:underline">User</Link>
        <Link href="/admin" className="hover:underline">Admin</Link>
        <Link href="/seller" className="hover:underline">Seller</Link>
      </nav>
    </header>
  );
}