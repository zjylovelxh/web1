import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Brother Chicken',
  pwa: false,
  logo: 'https://s2.loli.net/2024/11/09/QtD8SsuXO32NIMl.jpg',
  iconfontUrl: '',
};

export default Settings;
