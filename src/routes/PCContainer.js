import React from 'react';
import {connect} from 'dva';
import {IntlProvider} from 'react-intl';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {ENGLISH} from '../utils/constant';
import {Spin} from 'antd'

const App = ({children, i18n, loading, layout}) => {
  return (
    <Spin tip="loading..." spinning={loading.global && layout.loading} size="large">
      <div style={{height: '100vh'}}>
        <LocaleProvider locale={i18n.locale === ENGLISH ? null : zhCN}>
          <IntlProvider locale={i18n.locale} messages={i18n.messages}>{children}</IntlProvider>
        </LocaleProvider>
      </div>
    </Spin>
  );
};

export default connect(state => state)(App)
