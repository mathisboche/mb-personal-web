type TextCascadeProps = {
  text: string;
  className?: string;
};

const applyFrenchTypography = (input: string) =>
  input
    .replace(/\u00AB /g, "\u00AB\u202F")
    .replace(/ \u00BB/g, "\u202F\u00BB")
    .replace(/ :/g, "\u202F:")
    .replace(/ ;/g, "\u202F;")
    .replace(/ \?/g, "\u202F?")
    .replace(/ !/g, "\u202F!")
    .replace(/ - /g, " -\u00A0")
    .replace(/(\p{L})-(?=\p{L})/gu, "$1\u2011");

export default function TextCascade({ text, className }: TextCascadeProps) {
  const composedClassName = ["garage-cascade", className]
    .filter(Boolean)
    .join(" ");
  const formattedText = applyFrenchTypography(text);

  return (
    <span className={composedClassName}>
      {formattedText}
    </span>
  );
}
