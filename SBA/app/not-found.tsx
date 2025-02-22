import Ripple from '@/components/magicui/ripple';
import { Button } from '@/components/ui/button';
import CoolModeProvider from '@/components/ui/CoolModeProvider';
import Link from 'next/link';

export default function notFound() {
  return (
    <div className='px-4 bg-black h-screen w-full flex flex-col justify-center select-none items-center text-center gap-10 relative overflow-hidden'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-7xl 2xl:text-[120px] font-bold z-10'>
          404 Not Found
        </h1>
        <h1 className='mt-3 text-lg sm:text-2xl z-10'>
          Hmmm Looks like this Link is Broken 🤔
        </h1>
      </div>
      <div className='flex justify-center items-center gap-6 z-10'>
        <Button asChild>
          <Link className='text-lg md:text-xl' href={'/'}>
            Home
          </Link>
        </Button>
        <Link className='text-lg md:text-xl' href={'/cool404'}>
          <span className='text-lg md:text-xl underline underline-offset-8 hover:cursor-pointer hover:text-red-300  transition-all ease-in-out'>
            Cool 404?
          </span>{' '}
        </Link>
        <CoolModeProvider />
      </div>
      <Ripple />
    </div>
  );
}
