import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar 
      links={[
        <Link key={1} className="nav-link text-light" to="https://github.com/sammijeann">
          GitHub
        </Link>,
        <Link key={2} className="nav-link text-light" to="https://www.linkedin.com/in/sammi-j-teel/">
          LinkedIn
        </Link>,
        <Link key={3} className="nav-link text-light" to="/project">
        Projects
      </Link>,
      ]}
    />
  );
}