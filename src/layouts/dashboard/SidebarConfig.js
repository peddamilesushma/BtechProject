// component
import Iconify from '../../components/Iconify';
import CalculateIcon from '@mui/icons-material/Calculate';
import HistoryIcon from '@mui/icons-material/History';
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'Calculator',
    path: '/dashboard/user',
    icon: <CalculateIcon />
  },
  {
    title: 'History',
    path: '/dashboard/history',
    icon: <HistoryIcon />
  },
];

export default sidebarConfig;
