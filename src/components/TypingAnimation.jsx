import { useState, useEffect, useCallback } from "react";

function TypingAnimation({
    staticPrefix = "> I CREATE ",
    textArray = ["EXPERIENCES"],
    speed = 100,
    pauseDuration = 2000,
    className = "",
}) {
    const [displayText, setDisplayText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [phase, setPhase] = useState("typing");

    const currentWord = textArray[currentTextIndex] || "";

    const moveToNextWord = useCallback(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        setPhase("typing");
        setDisplayText("");
    }, [textArray.length]);

    const typeNextChar = useCallback(() => {
        setDisplayText((prev) => {
            const newText = prev + currentWord[prev.length];
            if (newText.length === currentWord.length) {
                setPhase("paused");
            }
            return newText;
        });
    }, [currentWord]);

    const deleteChar = useCallback(() => {
        setDisplayText((prev) => {
            const newText = prev.slice(0, -1);
            if (newText.length === 0) {
                moveToNextWord();
            }
            return newText;
        });
    }, [moveToNextWord]);

    useEffect(() => {
        if (!currentWord) return;

        let timeout;

        switch (phase) {
            case "typing":
                if (displayText.length < currentWord.length) {
                    timeout = setTimeout(typeNextChar, speed);
                }
                break;
            case "paused":
                timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
                break;
            case "deleting":
                if (displayText.length > 0) {
                    timeout = setTimeout(deleteChar, speed / 2);
                }
                break;
        }

        return () => clearTimeout(timeout);
    }, [
        phase,
        displayText.length,
        currentWord,
        speed,
        pauseDuration,
        typeNextChar,
        deleteChar,
    ]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className={className}>
            {staticPrefix}
            <span>{displayText}</span>
            <span
                className={`transition-opacity duration-150 ${
                    showCursor ? "opacity-100" : "opacity-0"
                }`}
            >
                |
            </span>
        </span>
    );
}

export default TypingAnimation;
