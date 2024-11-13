
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '练习两年半出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '宇',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '杨',
          href: '#',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
