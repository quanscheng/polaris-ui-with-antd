import copy from 'copy-to-clipboard'
import { useCallback } from 'react'
import { useToast } from './useToast'

export const useCopy = () => {
  const { toast: CopyMark, toggle } = useToast()

  const handleCopy = useCallback(
    (copyText, msg = 'Copied!') => {
      if (!copyText) return
      copy(copyText)
      toggle({ message: msg, error: false, duration: 1500 })
    },
    [toggle]
  )

  return { CopyMark, handleCopy }
}
