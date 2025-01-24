import Container from '@/layouts/container';
import background from '@/assets/images/hero-bg.webp';
import AppLink from '../App/app-link';

export default function Hero() {
  return (
    <div className='hero w-full relative overflow-hidden bg-black'>
      <img
        src={background}
        alt='Hero Background'
        className='absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full opacity-50'
      />
      <Container>
        <div className='flex flex-col items-center justify-center gap-4 min-h-96 h-full py-10 relative'>
          <h1 className='text-4xl font-bold text-white'>
            Welcome to our Dummy Store
          </h1>
          <p className='text-lg text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <AppLink
            to='/products'
            className='mt-4 bg-white text-black px-4 py-2 rounded-md transition-colors'
          >
            View Products
          </AppLink>
        </div>
      </Container>
    </div>
  );
}
