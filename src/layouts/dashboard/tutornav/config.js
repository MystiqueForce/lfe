// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/tutordash/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Profile',
    path: '/tutordash/myprofile',
    icon: icon('profile-svgrepo-com'),
  },
  {
    title: 'My Students',
    path: '/tutordash/students',
    icon: icon('student-person-svgrepo-com'),
  },
  {
    title: 'Assignments',
    path: '/tutordash/assignments',
    icon: icon('assignment-svg'),
  },
  {
    title: 'Zoom Meetings',
    path: '/tutordash/meetings',
    icon: icon('video-chat-svgrepo-com'),
  },
  // {
  //   title: 'Payments',
  //   path: '/tutordash/payments',
  //   icon: icon('payment-card-svg'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
