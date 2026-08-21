function ThemeToggle({ theme, onThemeToggle }) {
  const isDarkTheme = theme === 'dark'

  return (
    <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label="Toggle color theme">
      <span aria-hidden="true">{isDarkTheme ? '☀' : '☾'}</span>
      <span>{isDarkTheme ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
