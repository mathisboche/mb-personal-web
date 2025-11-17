type TextCascadeProps = {
  text: string;
  className?: string;
};

export default function TextCascade({ text, className }: TextCascadeProps) {
  const composedClassName = ["garage-cascade", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={composedClassName}>
      {text}
    </span>
  );
}
