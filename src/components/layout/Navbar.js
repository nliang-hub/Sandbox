const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
];

function Navbar() {
    return (
        <nav className="navbar" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href} className="navbar-link">
                    {label}
                </a>
            ))}
        </nav>
    );
}

export default Navbar;