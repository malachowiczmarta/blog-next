import Link from 'next/link';

export default function Layout() {
  return (
    <div className="p-10 font-mono">
      <nav className="bg-blue-400 p-5 flex justify-center">
        <Link href="/">
          <a className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">blog</a>
        </Link>
        <Link href="/about">
          <a className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">about</a>
        </Link>
      </nav>
      <mains className="bg-gray-100 p-5">tutaj bedzie tresc</mains>
      <footer className="bg-blue-400 p-5 text-gray-100 text-center">stopka</footer>
    </div>
  );
}
