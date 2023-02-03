import { useSyncExternalStore } from 'react'
import { proxy, snapshot, subscribe } from 'valtio'

// 创建一个代理对象
const proxyToastState = proxy({ active: false, text: 'error', isErr: true })

// 订阅
const subscribeToastPubState = (callback) => subscribe(proxyToastState, callback)

// 使用代理
const snapShotToastPubState = () => snapshot(proxyToastState)

// 自定义钩子
const useProxyToastState = () =>
  useSyncExternalStore(subscribeToastPubState, snapShotToastPubState)

export { proxyToastState, useProxyToastState }
