import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card} from 'antd';//, Typography
import React from 'react';
import styles from './Welcome.less';
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'欢迎来到鸡哥网站'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
      </Card>
    </PageContainer>
  );
};
export default Welcome;
