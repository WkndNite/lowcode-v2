interface DivProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Div = ({ style, children }: DivProps) => {
  return (
    <div
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Div;
