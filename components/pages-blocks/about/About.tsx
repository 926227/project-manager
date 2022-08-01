import { LayoutContainer } from '../../layout/common/LayoutContainer'
import { CardAbout } from './CardAbout'

export const About = () => {
  return (
    <LayoutContainer>
      <CardAbout src="/pictures/project1.png" text="intro" component="img" />
      <CardAbout
        src="/pictures/project1.png"
        text="intro"
        component="img"
        reverse
      />
      <CardAbout src="/pictures/project1.png" text="intro" component="img" />
    </LayoutContainer>
  )
}
