import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
            <nav className="container mx-auto p-4 flex items-center justify-between">
                <div className="flex items-center ml-[-40px] mt-[-120px]">
                    <a href="/">
                        <img src="../images/icon.png" alt="Logo" className="h-12 w-auto" />
                    </a>
                </div>
                <ul className="flex flex-col items-end space-y-4 mt-3 mr-[-20px] font-geist text-lg text-white-700">
                    <li>
                        <Link href="/" className="text-white hover:text-white visited:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-white hover:text-white visited:text-white">About</Link>
                    </li>
                    <li>
                        <Link href="#team" className="text-white hover:text-white visited:text-white">Team</Link>
                    </li>
                    <li>
                        <Link href="#join-us" className="text-white hover:text-white visited:text-white">Join Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
