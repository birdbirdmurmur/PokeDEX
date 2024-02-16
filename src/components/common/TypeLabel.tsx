type TypeLabelProps = {
  backgroundColor: string;
  text: string;
};

export const TypeLabel = ({ backgroundColor, text }: TypeLabelProps) => (
  <label className="px-2 py-1 rounded-xl" style={{ backgroundColor }}>
    {text}
  </label>
);
