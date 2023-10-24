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
    title: 'Documents Upload',
    path: '/docupload',
    icon: icon('ic_blog'),
  },
  {
    title: 'Login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
