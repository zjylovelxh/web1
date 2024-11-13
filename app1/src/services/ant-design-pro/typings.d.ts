// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: number;
    uaccount: string;
    uname: string;
    avatarurl: string | null;
    gender: string | null;
    mpassword: string;
    phone: string ;
    email: string | null;
    ustatus: number;
    createtime: string;
    updatetime: string;
    version: number;
    isdeleted: number;
  };

  type BaseResponse<T> = {
    status?: string;
    type?: string;
    code?: number;
    message?: string;
    date?: T;
  }
  // "code": 200,
  //   "message": "success",
  //   "data": {
  //   "message": {
  //     "id": 1,
  //       "uaccount": "zjy666",
  //       "uname": "周周",
  //       "avatarurl": null,
  //       "gender": null,
  //       "mpassword": "",
  //       "phone": "18828921856",
  //       "email": null,
  //       "ustatus": 3,
  //       "createtime": "2024-11-05T15:25:03.000+00:00",
  //       "updatetime": "2024-11-05T15:25:03.000+00:00",
  //       "version": 1,
  //       "isdeleted": 0
  //   }
  // }
  type LoginResult = {
    id: number;
    uaccount: string;
    uname: string;
    avatarurl: string | null;
    gender: string | null;
    mpassword: string;
    phone: string ;
    email: string | null;
    ustatus: number;
    createtime: string;
    updatetime: string;
    version: number;
    isdeleted: number;

  };
  type RegistResult = {
    id: number;
    uaccount: string;
    uname: string;
    avatarurl: string | null;
    gender: string | null;
    mpassword: string;
    phone: string ;
    email: string | null;
    ustatus: number;
    createtime: string;
    updatetime: string;
    version: number;
    isdeleted: number;

  };




  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    uaccount?: string;
    mpassword?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type RegistParams = {
    uaccount?: string;
    mpassword?: string;
    phone?:string;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
