import { Fragment } from "react";

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
  const composedClassName = ["garage-cascade", className]
    .filter(Boolean)
    .join(" ");

  const tokens = text.split(/(\s+)/).filter(Boolean);
  const animatedCharacterCount = Array.from(tokens.filter((token) => !/^\s+$/.test(token)).join(""))
    .length;
  let absoluteIndex = 0;

  return (
    <span className={composedClassName} aria-label={text}>
      {tokens.map((token, tokenIndex) => {
        if (/^\s+$/.test(token)) {
          return (
            <Fragment key={`space-${tokenIndex}`}>
              {token}
            </Fragment>
          );
        }

        const characters = Array.from(token);

        return (
          <span key={`word-${tokenIndex}`} className="garage-cascade-word">
            {characters.map((character, characterIndex) => {
              const currentIndex = absoluteIndex++;
              return (
                <span
                  key={`char-${tokenIndex}-${characterIndex}`}
                  aria-hidden="true"
                  className="garage-cascade-char"
                  style={{
                    animationDelay: `calc(var(--line-delay, 0s) + ${getDelay(
                      currentIndex,
                      animatedCharacterCount
                    )}s)`,
                  }}
                >
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
