import { Icon } from "@iconify/react";

type ButtonProps = React.CSSProperties & {
  label?: string;
  onClick: () => void;
  icon?: string;
  className: string;
};

const ButtonComponent = ({ label, onClick, icon, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      <p>{label}</p>
    </button>
  );
};

export default ButtonComponent;
