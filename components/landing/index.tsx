// create a react js component called "landing"

import LandingContent from './landingContent'
import LandingHeader from './landingHeader'
import LandingPopular from './landingPopular'

export default function Landing() {
  return (
    <div>
      <LandingHeader />
      <LandingContent fetchURL='' />
      <LandingPopular fetchUrl='' />
    </div>
  )
}
