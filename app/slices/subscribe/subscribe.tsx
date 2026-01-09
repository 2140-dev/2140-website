import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { Eyebrow } from '../../shared/components/eyebrow/eyebrow'

interface SubscribeProps {
  title: string
  description?: string
}

const Subscribe = ({ title, description }: SubscribeProps) => {
  return (
    <Section>
      <Container size="sm" className="text-center">
        <Eyebrow text="Follow us" color="blue" />
        <h2>{title}</h2>
        {description && <p className="mb-8">{description}</p>}
        [Substack embed goes here]
      </Container>
    </Section>
  )
}

export default Subscribe
