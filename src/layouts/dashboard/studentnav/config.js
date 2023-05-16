import SvgColor from '../../../components/svg-color';
// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const navConfig = [
  {
    title: 'Dashboard',
    path: '/studentdash/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Profile',
    path: '/studentdash/myprofile',
    icon: icon('profile-svgrepo-com'),
  },
  {
    title: 'Tutor List',
    path: '/studentdash/tutorlist',
    icon: icon('people-svgrepo-com'),
  },
  {
    title: 'My Tutors',
    path: '/studentdash/mytutors',
    icon: icon('teacher-svgrepo-com'),
  },
  {
    title: 'Assignments',
    path: '/studentdash/assignments',
    icon: icon('assignment-svg'),
  },
  {
    title: 'Library',
    path: '/studentdash/library',
    icon: icon('library-svgrepo-com'),
  },
  {
    title: 'Zoom Meeting',
    path: '/studentdash/meeting',
    icon: icon('video-chat-svgrepo-com'),
  },
];
export default navConfig;