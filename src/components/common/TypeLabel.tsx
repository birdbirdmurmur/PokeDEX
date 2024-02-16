type TypeLabelProps = {
  backgroundColor: string;
  text: string;
};

const TypeLabel = ({ backgroundColor, text }: TypeLabelProps) => (
  <label className="px-2 py-1 rounded-xl" style={{ backgroundColor }}>
    {text}
  </label>
);

export default TypeLabel;
