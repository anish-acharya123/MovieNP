type PTagProps = {
  label: string;
  className?: string;
  varient?: "filled" | "outlined";
};

const PTag = ({ label, className }: PTagProps) => {
  return <p className={className}>{label}</p>;
};

export default PTag;
