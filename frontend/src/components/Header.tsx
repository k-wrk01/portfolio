import { Link as Scroll } from 'react-scroll';

export const Header = () => {
  return (
    <div className="navbar bg-base-100 opacity-90 sticky top-0 z-50 shadow">
      <ul className="menu menu-horizontal flex gap-2 px-2 py-0">
        <li>
          <Scroll to="profile" spy={true} smooth={true} offset={0} duration={500}>Profile</Scroll>
        </li>
        <li>
          <Scroll to="works" spy={true} smooth={true} offset={0} duration={500}>Works</Scroll>
        </li>
      </ul>
    </div>
  );
};
