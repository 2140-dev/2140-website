import { Container } from "app/shared/layouts/container/container";
import { Section } from "app/shared/layouts/section/section";

interface Props {
  title: string;
  excerpt?: string;
}
export const PageTitle = ({ title, excerpt }: Props) => {
  return (
    <Section className="pt-40 text-center">
      <Container size="sm">
        <h1>{title}</h1>
        {excerpt && (
          <p className="text-custom-l">
            {excerpt}
          </p>
        )}
      </Container>
    </Section>
  );
};
