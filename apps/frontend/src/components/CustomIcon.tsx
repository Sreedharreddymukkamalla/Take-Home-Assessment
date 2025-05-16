type CustomIconProps = {
  src: string;
  alt?: string;
  size?: number;
};

export const CustomIcon = ({ src, alt = '', size = 24 }: CustomIconProps) => (
  <img
    src={`/icons/${src}`}
    alt={alt}
    width={size}
    height={size}
    style={{ objectFit: 'contain' }}
  />
);

export default CustomIcon;
