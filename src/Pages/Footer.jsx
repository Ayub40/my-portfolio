

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-5 mb-5">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold">Ayub Khan</span> </p>
            </aside>
        </footer>
    );
};

export default Footer;