import Image from 'next/image'
import { RouterLink } from '../../../common/router-link'

export const Logo = () => {
  return (
    <RouterLink href="/main">
      <Image src="/pictures/logo.png" width="40px" height="40px" alt="logo" />
    </RouterLink>
  )
}
