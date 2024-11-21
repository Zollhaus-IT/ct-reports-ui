import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Logo() {
  return (
   <Image
      src="/logo.png"
      width={100}
      height={70}
      className="md:block"
      alt="Screenshots of the dashboard project showing desktop version"
   />
  );
}
