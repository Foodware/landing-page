export default function Navbar() {
  return (
    <>
      <nav className="w-full py-5 px-4 flex items-center bg-[var(--bg-black)] text-white border-b-2 border-b-[var(--blue)]"> 
        <a href="/" className="navLogo font-black">
          NavLogo
        </a>
        <div className="navLinks flex justify-center items-center gap-5 ms-auto">
          <ul className="flex gap-5 text-[#9b9090]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">Product &#11167;</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
            <li>
              <a href="#">Whitepaper</a>
            </li>
          </ul>
          <div className="buttons flex justify-center items-center gap-6">
            <button
              className="font-[inherit] text-[var(--blue)] border-2 px-5 py-1 rounded-md border-[var(--blue)]"
              style={{ font: "inherit" }}
            >
              Login
            </button>
            <button
              className="font-[inherit] border-none rounded-md bg-[var(--blue)] border-[var(--blue)] px-5 py-1"
              style={{ font: "inherit" }}
            >
              Dashboard
            </button>
          </div>
        </div>
        <div className="navBar"></div>
      </nav>
    </>
  );
}
