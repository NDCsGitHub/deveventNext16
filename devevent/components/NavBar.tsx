import Link from "next/link";

const NavBar = () => {
  return (
    <header className="border border-gray-300">
      <nav>
        <Link href="/">
          <p>Nav bar</p>
        </Link>
        <ul >
          <Link href="/" className="border border-gray-300 m-5">Home</Link>
          <Link href="/" className="border border-gray-300 m-5">Events</Link>
          <Link href="/" className="border border-gray-300 m-5">Create Events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
