import { Toast } from '@shopify/polaris'
import { useCallback, useState } from 'react'

export const useToast = () => {
  const [active, setActive] = useState(false)
  const [content, setContent] = useState('')
  const [error, setError] = useState(true)
  const [duration, setDuration] = useState(4500)

  const toggle = useCallback(
    ({ message = 'error', error = true, duration = 4500 }) => {
      setActive((active) => !active)
      setContent(message)
      setError(error)
      setDuration(duration)
    },
    []
  )

  const toast = active ? (
    <Toast
      content={content}
      error={error}
      onDismiss={() => setActive((acticve) => !acticve)}
      duration={duration}
    />
  ) : null

  return { toast, toggle }
}
