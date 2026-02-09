import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-white text-base-content border-t border-base-200">
            <aside className="items-center grid-flow-col">
                <div className="avatar">
                    <div className="w-16 rounded-full border-2 border-black p-1">
                        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bunny" alt="storemate logo" />
                    </div>
                </div>
                <div className="ml-4">
                    <p className="font-bold text-xl">storemate</p>
                </div>
            </aside>

            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <div className="flex flex-col gap-2 text-right">
                        <p className="flex items-center justify-end gap-2 text-gray-500">
                            <span className="text-red-500">📍</span> 345 Faulconer Drive, Suite 4, Charlottesville, CA 12345
                        </p>
                        <div className="flex items-center justify-end gap-4 text-blue-500">
                            <a className="link link-hover flex items-center gap-1">📞 (123) 456-7890</a>
                            <a className="link link-hover flex items-center gap-1">🖨️ (123) 456-7890</a>
                        </div>
                        <div className="flex justify-end gap-4 mt-2 text-blue-600 text-xl">
                            <a className="cursor-pointer"><i className="fab fa-facebook">f</i></a>
                            <a className="cursor-pointer">in</a>
                            <a className="cursor-pointer">▶️</a>
                            <a className="cursor-pointer">📷</a>
                            <a className="cursor-pointer">G</a>
                            <a className="cursor-pointer">P</a>
                            <a className="cursor-pointer">Example</a>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
