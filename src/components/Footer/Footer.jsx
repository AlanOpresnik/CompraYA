'use client'
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-1  py-8 sm:py-12 border-t  mt-24 ">
            <div className="container mx-auto px-4">
                <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 className="text-xl font-bold mb-6">CompraYA</h5>
                        <ul className="list-none footer-links">
                            {['Quienes somos?', 'Como funcionan las compras', 'Terminos y condiciones'].map((item, index) => (
                                <li className="mb-2" key={index}>
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6">Cuenta</h5>
                        <ul className="list-none footer-links">
                            {['Crea una cuenta', 'Inicia Sesion', 'Editar Cuenta'].map((item, index) => (
                                <li className="mb-2" key={index}>
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                  
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 className="text-xl font-bold mb-6">Ayuda</h5>
                        <ul className="list-none footer-links">
                            {['Soporte', 'Contactate con nosotros'].map((item, index) => (
                                <li className="mb-2" key={index}>
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Sigamos Conectados</h5>
                        <div className="flex sm:justify-center items-center xl:justify-start">
                            <a href="#" className="w-8 h-9  border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                               <FacebookOutlined/>
                            </a>
                            <a href="#" className="w-8 h-9  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                <Twitter/>
                            </a>
                            <a href="#" className="w-8 h-9    border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                    <div className="sm:w-full px-4 md:w-1/6">
                        <strong>CompraYA</strong>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                        <h6 className="font-bold mb-2">Direccion</h6>
                        <address className="not-italic mb-4 text-sm">
                            123 6th St.<br />
                            Melbourne, FL 32904
                        </address>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                        <h6 className="font-bold mb-2">Estamos interesados en vos!</h6>
                        <Link className="hover:text-blue-500" href={'/'}>Trabaja con nosotros</Link>
                    </div>
                    <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                        <button className="px-4 py-2 rounded-lg main-color hover:bg-[#fdac3aad] text-white">Trabaja con nosotros</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;