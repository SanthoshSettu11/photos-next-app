import Link from 'next/link';

function Header() {
    return (
        <div className="Header">
            <nav>
                <div className="logo">PHOTO</div>
                <Link href="/">Albums</Link>
                <Link href="/photos">Photos</Link>
            </nav>
        </div>)
}
export default Header;
