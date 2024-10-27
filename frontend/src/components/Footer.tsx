import fotter1 from '../fotter1.png';
import fotter2 from '../fotter2.png';

export const Footer = () => {
  return (
    <footer className="footer pt-20 pl-6">
      <div className="tooltip" data-tip="Hello, world!">
        <div className="relative">
          <img src={fotter1} className="h-20 hover:opacity-0" alt="" />
          <div className="absolute top-0"><img src={fotter2} className="h-20 opacity-0 hover:opacity-100" alt="" /></div>
        </div>
      </div>
    </footer>
  );
};
