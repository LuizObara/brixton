import Image from 'next/image';

import logoLight from '@/assets/Brixton Logomarca-01.png';
import logoDark from '@/assets/Brixton Logomarca-01 dark.png';

type LogoMarcaProps = {
  type?: "default" | "dark";
}

const LogoMarca = ({ type = "default" }: LogoMarcaProps) => {

  const isDarkMode = type === "dark";

  return (
    <div className="w-full flex lg:justify-left">
      <Image
        src={isDarkMode ? logoDark : logoLight}
        alt="Logomarca Brixton"
        sizes="(min-width: 100%)"
        style={{ objectFit: 'contain' }}
        className="w-full"
      />
    </div>
  );
};

export default LogoMarca;