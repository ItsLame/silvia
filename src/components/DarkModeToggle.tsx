const DarkModeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark",);
  };

  return (
    <button className="rounded-full bg-red-800" onClick={toggleTheme}>
      <div className="px-4 py-2 rounded-full -translate-y-1 bg-red-200 text-red-600 font-semibold active:translate-y-0 transition-all active:shadow-inner active:shadow-red-800">
        {/*<IconDeviceDesktop />*/}
        {/*<IconSun />*/}
        {/*<IconMoon />*/}
      </div>
    </button>
  );
};

export default DarkModeToggle;
