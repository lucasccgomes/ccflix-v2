import Logo from '../../assets/img/logo-ccflix.png'
import Button from '../button';

export const Navbar = () => {
  return (
    <div
      className="h-[5.375rem]
    max-w-[83%]
    m-auto
    flex
    items-center
    justify-between
    absolute
    left-0
    right-0
    pt-5
    pb-5
    "
    >
      <img className='max-w-[138px]' src={Logo} alt="" />
      <Button>Entrar</Button>
    </div>
  );
};
