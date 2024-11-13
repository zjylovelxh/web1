import Footer from '@/components/Footer';
import { regist } from '@/services/ant-design-pro/api';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  //ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { message, Tabs } from 'antd';//Alert,
import React, { useState } from 'react';
// @ts-ignore
import { history } from 'umi';//, useModel
import styles from './index.less';
//import { Simulate } from 'react-dom/test-utils';
//import error = Simulate.error;
const Regist: React.FC = () => {
  const [type, setType] = useState<string>('account');
  // const [userRegistState, setUserRegistState] = useState<API.RegistResult>({});
  const handleSubmit = async (values: API.RegistParams) => {
    try {
      // 注册
      const me = await regist({
        ...values,
        type,
      });
      if (me!=null) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        if (!history) return;
        const { query } = history.location;
        history.push({pathname:'/user/' +
            '' +
            'login',query});
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
        searchConfig: {
        submitText: '注册'
      }}}
          logo={<img alt="logo" src="https://s2.loli.net/2024/11/07/1qbkKr38OJCNjhZ.jpg" />}
          title="Brother Chicken"
          subTitle={'守护最好的坤坤'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegistParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'注册'} />
          </Tabs>

          {type === 'account' && (
            <>
              <ProFormText
                name="uaccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText
                name="phone"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'电话'}
                rules={[
                  {
                    required: true,
                    message: '电话是必填项！',
                  },
                  {
                    min:11,
                    max:11,
                    message: '电话号码必须11位！'
                  }
                ]}
              />
              <ProFormText.Password
                name="mpassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
          )}



        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Regist;
