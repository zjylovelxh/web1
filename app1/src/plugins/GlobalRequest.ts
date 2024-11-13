/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */




/**
 * 异常处理程序
 */


import { history } from 'umi';

import { message } from 'antd';
import { extend } from 'umi-request';
import { stringify } from 'querystring';

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix:process.env.NODE_ENV=='production'? 'http://47.108.146.53:8080':'http://localhost:8080',
  timeout: 1000,
  // requestType: 'form',
});

/**
 * 所以请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url: ${url}`);
  return {
    url,
    options: {
      ...options,
      headers: {

      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {

  const msg = await response.clone().json();
  // console.log(data)
  if(msg.code==200){
    return msg.data;
  }

  if(msg.code==504){
   // message.error('请先登录！');
    history.replace({pathname: '/user/login',search:stringify({redirect:location.pathname})});
  }
  else {
    message.error(msg.message);
  }
});

export default request;
