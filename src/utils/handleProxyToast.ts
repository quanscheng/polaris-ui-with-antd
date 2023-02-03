import { proxyToastState } from '@/hooks/useProxyToastState'

export const handleProxyToast = (error: string) => {
  proxyToastState.active = true
  proxyToastState.text = error
}
