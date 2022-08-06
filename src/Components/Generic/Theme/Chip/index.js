import { Chip as MuiChip } from "@material-ui/core";

const Chip = ({
  title,
  icon,
  size,
  unclickable,
  color,
  variant,
  link,
  className,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <MuiChip
        label={title}
        icon={icon}
        size={size ? size : "medium"}
        clickable={unclickable ? false : true}
        color={color ? color : "secondary"}
        variant={variant ? variant : "outlined"}
        className={`!px-1 !mx-2 ${className}`}
      />
    </a>
  );
};

export default Chip;
