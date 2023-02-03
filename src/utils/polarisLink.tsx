import { LinkLikeComponentProps } from '@shopify/polaris/build/ts/latest/src/utilities/link'
import { Link } from 'react-router-dom'

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/

export function PolarisLink({
  children,
  url = '',
  external,
  ref,
  ...rest
}: LinkLikeComponentProps) {
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = '_blank'
    rest.rel = 'noopener noreferrer'
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={url} {...rest}>
      {children}
    </Link>
  )
}
