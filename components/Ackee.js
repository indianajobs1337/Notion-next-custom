import { useRouter } from 'next/router'
import useAckee from 'use-ackee'

const Ackee = () => {
  const router = useRouter()
  useAckee(router.asPath, {
    detailed: false,
    ignoreLocalhost: true
  })
  return null
}

export default Ackee
