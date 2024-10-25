import { Icon } from "@iconify/react";

type IconProps = {
  icon: string;
  iconClass: string;
  textClass: string;
  parentClass: string;
  labelfirst: string;
  labelSecond?: string;
  labelSecondClass?: string;
};

const IconComponent = ({
  icon,
  iconClass,
  textClass,
  parentClass,
  labelfirst,
  labelSecond,
  labelSecondClass,
}: IconProps) => {
  return (
    <div className={parentClass}>
      <span>
        <Icon icon={icon} className={iconClass} />
      </span>
      <p className={textClass}>
        <span>{labelfirst}</span>
        {labelSecondClass && (
          <span className={labelSecondClass}>{labelSecond}</span>
        )}
      </p>
    </div>
  );
};

export default IconComponent;
