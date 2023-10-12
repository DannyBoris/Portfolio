import "./index.less";
const Header = () => {
  const links = [
    { to: "about", label: "About me" },
    { to: "projects", label: "Projects" },
    { to: "resume", label: "Resume" },
  ];

  return (
    <nav>
      <ul>
        {links.map(({ to, label }) => (
          <li>
            <a href={to}>{label}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li>Github</li>
        <li>Linkedin</li>
        <li>Email</li>
      </ul>
    </nav>
  );
};

export default Header;
