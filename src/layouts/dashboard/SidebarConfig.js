// component
import Iconify from '../../components/Iconify';
import CalculateIcon from '@mui/icons-material/Calculate';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'IRC Calculator',
    path: '/dashboard/user',
    icon: <CalculateIcon />
  },
  {
    title: 'ASTM Calculator',
    path: '/dashboard/astm',
    icon: <CalculateIcon />
  },
  {
    title: 'History',
    path: '/dashboard/history',
    icon: <HistoryIcon />
  },
  {
    title: 'About',
    path: '/dashboard/about',
    icon: <InfoIcon />
  },
];

export default sidebarConfig;
