import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Article Upload',
    path: '/articleupload',
    icon: icon('ic_user'),
  },
  {
    title: 'Bulk Upload',
    path: '/bulkupload',
    icon: icon('ic_cart'),
  },
  {
    title: 'Login',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
