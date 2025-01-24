import AppLink from '../App/app-link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <p className='text-gray-300'>
              We are an online store dedicated to providing high-quality
              products at affordable prices.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <AppLink
                  to='/terms'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Terms of Service
                </AppLink>
              </li>
              <li>
                <AppLink
                  to='/privacy'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Privacy Policy
                </AppLink>
              </li>
              <li>
                <AppLink
                  to='/shipping'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Shipping Information
                </AppLink>
              </li>
              <li>
                <AppLink
                  to='/returns'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Returns & Exchanges
                </AppLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <p className='text-gray-300'>123 Store Street, City, Country</p>
            <p className='text-gray-300'>Email: info@dummy-store.com</p>
            <p className='text-gray-300'>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className='mt-8 text-center text-gray-300'>
          <p>&copy; {currentYear} Dummy Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
