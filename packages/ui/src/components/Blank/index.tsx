import type { BlankProps } from './types';

const ZmwBlank: React.FC<BlankProps> = ({
  size = '30px',
  direction = 'vertical',
  display = true,
  style,
}) => {
  if (!display) return null;

  const sizeStyle = direction === 'vertical'
    ? { height: size }
    : { width: size };

  const containerStyle = {
    ...style,
    ...sizeStyle,
  };

  return (
    <div
      style={containerStyle}
      className="zmw-blank"
    />
  );
};

export default ZmwBlank;