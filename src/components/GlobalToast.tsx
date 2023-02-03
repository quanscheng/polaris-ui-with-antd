import { proxyToastState, useProxyToastState } from '@/hooks/useProxyToastState'
import { Toast } from '@shopify/polaris'

export const GlobalToast = () => {
  const { active } = useProxyToastState()

  const toastvaltio = active ? (
    <Toast
      error={proxyToastState.isErr}
      content={proxyToastState.text}
      onDismiss={() => {
        proxyToastState.active = !proxyToastState.active
      }}
    />
  ) : null
  return <>{toastvaltio}</>
}
