import Link from "next/link";
import Image from "next/image";

interface CozarLogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
}

const CozarLogo = ({
  width = 46,
  height = 54,
  priority = false,
}: CozarLogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/images/cozar-logo.png"
        alt="CoZar Architects"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
};

export default CozarLogo;
