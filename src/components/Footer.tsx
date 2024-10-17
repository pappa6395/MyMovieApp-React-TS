import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className='bg-gradient-to-r from-slate-900 to-slate-700 text-white py-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0'>
            <div>
                <h3 className='text-2xl font-semibold mb-4'>About Us</h3>
                <p className='text-gray-400'>We are dedicated to bringing you the latest movies and reviews.
                    Stay connected with us and discover new content everyday.
                </p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-4'>Quick Links</h3>
                <ul>
                    <li className='mb-2'>
                        <a href='#' className='text-gray-400 hover:text-white transition'>Home</a>
                    </li>
                    <li className='mb-2'>
                        <a href='#' className='text-gray-400 hover:text-white transition'>Movies</a>
                    </li>
                    <li className='mb-2'>
                        <a href='#' className='text-gray-400 hover:text-white transition'>About</a>
                    </li>
                    <li className='mb-2'>
                        <a href='#' className='text-gray-400 hover:text-white transition'>Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-4'>Subscribe to our Newsletter</h3>
                <p className='text-gray-400 mb-4'>
                    Get the latest updates on new releases and exclusive offers.
                </p>
                <form className='flex flex-col sm:flex-rom gap-2'>
                    <input 
                        type="email" 
                        className="p-2 rounded bg-slate-800 
                        text-gray-300 focus:outline-none" 
                        placeholder='Your email address'/>
                    <button type='submit' className='p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='mt-10 border-t border-gray-700 pt-6 text-center text-gray-400'>
            <p>&copy; 2024 MyMovieApp. All rights reserved.</p>
            <div className='flex justify-center space-x-4 mt-4'>
                <a href='#' className='hover:text-white'><FaFacebook /></a>
                <a href='#' className='hover:text-white'><FaInstagram /></a>
                <a href='#' className='hover:text-white'><FaLinkedin /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer