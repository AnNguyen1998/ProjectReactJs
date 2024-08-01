import React from 'react'
import { Spin } from 'antd';

export default function Loading() {
  return (
        <Spin style={{position:'absolute', top:'50%', left:'50%'}} tip="Loading" size="large"></Spin>
  )
}
