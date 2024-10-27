import { Icon } from "@iconify/react";

type IconProps = {
  icon: string;
  iconClass?: string;
  iconText?: string;
  textClass?: string;
  parentClass?: string;
  labelfirst?: string;
  labelSecond?: string;
  labelFirstClass?: string;
  labelSecondClass?: string;
};

const IconComponent = ({
  icon,
  iconClass,
  iconText,
  textClass,
  parentClass,
  labelfirst,
  labelSecond,
  labelFirstClass,
  labelSecondClass,
}: IconProps) => {
  return (
    <div className={parentClass}>
      <span>
        <Icon icon={icon} className={iconClass} />
        {iconText && <span className="text-xl">{iconText}</span>}
      </span>
      <p className={textClass}>
        <span className={labelFirstClass}>{labelfirst}</span>
        {labelSecondClass && (
          <span className={labelSecondClass}>{labelSecond}</span>
        )}
      </p>
    </div>
  );
};

export default IconComponent;
