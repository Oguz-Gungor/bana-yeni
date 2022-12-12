export default function CardView({
  tagBackgroundColor,
  tagTextColor,
  children,
  className,
  onClick,
}) {
  const pointerStyle = onClick ? { cursor: "pointer" } : {};
  return (
    <span
      className={"card-view " + className}
      onClick={() => onClick && onClick()}
      style={{
        backgroundColor: tagBackgroundColor,
        color: tagTextColor,
        ...pointerStyle,
      }}
    >
      {children}
    </span>
  );
}
