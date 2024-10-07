import Image from 'next/image';
import Mars from '../images/marsweb.png';

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <Image
        className="object-cover w-full h-full"
        src={Mars}
        alt="Mars Picture"
        layout="fill"
      />
    </div>
  );
};

export default Background;
