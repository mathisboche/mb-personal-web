type TextCascadeProps = {
  text: string;
  className?: string;
};

function getDelay(index: number, length: number) {
  const base = index * 0.035;
  const randomSeed = Math.sin(index * 12.9898 + length) * 43758.5453;
  const jitter = randomSeed - Math.floor(randomSeed);
  return Number((base * 0.85 + jitter * 0.12).toFixed(3));
}

export default function TextCascade({ text, className }: TextCascadeProps) {
  const characters = Array.from(text);
  const composedClassName = ["garage-cascade", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={composedClassName} aria-label={text}>
      {characters.map((character, index) => (
        <span
          key={`char-${character}-${index}`}
          aria-hidden="true"
          className="garage-cascade-char"
          style={{ animationDelay: `${getDelay(index, characters.length)}s` }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </span>
  );
}
