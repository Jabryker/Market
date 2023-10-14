import { Badge, Button, Dropdown, Menu } from 'antd';
import { FC, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { navbar } from '../../../assets/data/';
import logo from '../../../assets/images/Logo_HorecaArt.svg';
import { BorderLeft } from '@mui/icons-material';

interface NavItem {
  id: number;
  to: string;
  label: string;
}

interface IHeaderOrganismProps {
  userType?: string;
}

export const HeaderOrganism: FC<IHeaderOrganismProps> = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const subHeaderHeight = 50;

  const handleScroll = () => {
    if (window.scrollY > subHeaderHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleSearch = () => {
    navigate(`/product?search=${encodeURIComponent(searchQuery)}`);
    // Закрыть навигационное меню после перехода
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cartItemsCount = 1;

  const userInfo = localStorage.getItem('userInfo');
  const userType = userInfo ? JSON.parse(userInfo).role : '';

  const hasAccess = localStorage.getItem('access');
  const hasRefresh = localStorage.getItem('refresh');

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('userInfo');
    navigate('/');
    // Закрыть навигационное меню после выхода
    setNav(false);
  };

  const menu = (
    <Menu>
      {hasAccess && hasRefresh ? (
        userType === 'S' ? (
          <Menu.Item key='profile-seller'>
            <Link to={`/profile`}>Профиль продавца</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key='profile-buyer'>
            <Link to={`/profile`}>Профиль покупателя</Link>
          </Menu.Item>
        )
      ) : null}
      <Menu.Divider />
      <Menu.Item key='logout' onClick={handleLogout}>
        Выйти из аккаунта
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className={`py-4 ${scrolling ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
        <div className='container mx-auto flex items-center justify-between'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-12' />
          </Link>

          <div className='flex justify-center items-center w-full sm:w-[1000px]'>
            <select
              style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', background: '#F3F2F2', borderRight: '1px solid gray' }}
              className='w-1/5 px-4 py-3 border focus:outline-none focus:border-blue-300'
              placeholder='Фильтр по'
            >
              <option value=''>Фильтры</option>
              <option value='name'>Названию</option>
              <option value='category'>Категории</option>
              <option value='address'>Адресу</option>
              <option value='country'>Стране производителя</option>
              <option value='brand'>Бренду</option>
              <option value='fuelType'>Виду топлива</option>
              <option value='priceLessThan'>Цена меньше чем</option>
              <option value='priceGreaterThan'>Цена больше чем</option>
            </select>

            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: '#F3F2F2' }}
              className='w-1/2 px-4 py-3 border rounded-l-none border-l-0 focus:outline-none focus:border-blue-300'
              placeholder='Поиск'
            />

            <button
              onClick={handleSearch}
              style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}
              className='py-3 bg-gradient-to-r from-[#EC9A1E] via-[#EC9A1E] to-[#ED5555] text-white font-semibold  shadow-md transition focus:outline-none w-32 flex items-center justify-center ml-2'
            >
              <AiOutlineSearch size={20} className='mr-2' /> Поиск
            </button>
          </div>

          <div className='flex items-center'>
            {hasAccess && hasRefresh ? (
              <Dropdown overlay={menu} trigger={['click']} className='overflow-hidden'>
                <Button className='ml-4 text-[#373737]'>Профиль</Button>
              </Dropdown>
            ) : (
              <Link to='/login' className='overflow-hidden'>
                <button className='ml-4 bg-[#fff] text-[#373737] hover:bg-[#000] hover:text-[#fff] font-semibold py-2 px-4 rounded-[10px] shadow-md border border-[#47535F] transition duration-300 ease-in-out'>
                  Войти
                </button>
              </Link>
            )}

            <Link to='/cart' className='mx-10 text-[#333] hover:text-blue-300'>
              <Badge count={cartItemsCount} showZero>
                <AiOutlineShoppingCart size={24} />
              </Badge>
            </Link>
            <div onClick={handleNav} className='cursor-pointer'>
              {nav ? <AiOutlineClose size={24} color='#333' /> : <AiOutlineMenu size={24} color='#333' />}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-gray-600 transition duration-500 ease-in-out ${
          nav ? 'fixed top-0 left-0 w-full h-full z-50' : 'fixed left-[-100%]'
        }`}
      >
        <div className='container mx-auto'>
          <ul className='text-white capitalize'>
            {navbar.map((item: NavItem) => (
              <li key={item.id} className='p-4'>
                <Link
                  to={item.to}
                  className='border-b border-[#999] hover:text-blue-300 transition-colors duration-300'
                  onClick={() => setNav(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
