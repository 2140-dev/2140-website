import { Container } from "app/shared/layouts/container/container";
import { Section } from "app/shared/layouts/section/section";
import styles from './page-title.module.scss'

interface Props {
  title: string;
  excerpt?: string;
}
export const PageTitle = ({ title, excerpt }: Props) => {
  return (
    <Section className={styles['page-title']}>
      <Container size="sm">
        <h1>{title}</h1>
        {excerpt && (
          <p className="text-l">
            {excerpt}
          </p>
        )}
      </Container>
    </Section>
  );
};
