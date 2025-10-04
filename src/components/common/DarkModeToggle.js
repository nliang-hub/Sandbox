import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const themes = ['light-theme', 'dark-theme'];
    const themeTexts = ['Dark', 'Light'];
    const [theme, setTheme] = useState(0);

    useEffect(() => {
        // Remove both classes first to avoid duplicates
        document.body.classList.remove(...themes);
        document.body.classList.add(themes[theme]);
    }, [theme]);

    const handleToggle = () => {
        setTheme(prev => 1 - prev);
    };

    return (
        <button type="button" onClick={handleToggle}>
            {themeTexts[theme]}
        </button>
    );
}