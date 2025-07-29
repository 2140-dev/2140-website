import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { TeamMember } from "@/app/shared/components/team-member/team-member";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { TeamResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";
import { PortableTextBlock } from "next-sanity";
import { ComponentProps } from "react";

const commonContainerProps: Partial<ComponentProps<typeof Container>> = {
  size: "sm",
  sx: {
    textAlign: "center",
  },
};
interface Props {
  eyebrow?: string;
  variant?: "teaser" | "full";
  title: string;
  summary?: string;
  team: TeamResultType[];
  additional?: PortableTextBlock;
}
const TeamMembers = ({
  eyebrow,
  variant,
  title,
  summary,
  team,
  additional,
}: Props) => {
  return (
    <Section>
      <Container {...commonContainerProps}>
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        {title && (
          <Typography variant="h2" sx={getStylishMarkdown("white")}>
            <MarkdownRender>{title}</MarkdownRender>
          </Typography>
        )}
        {summary && <Typography variant="body1">{summary}</Typography>}
      </Container>
      <Container size="md" sx={{ mt: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
            justifyContent: "center",
            gap: [5, 5, 8],
          }}
        >
          {team.map((team, index) => (
            <TeamMember key={team._id} team={team} variant={variant} />
          ))}
        </Box>
      </Container>
      {additional && (
        <Container
          {...commonContainerProps}
          sx={{ textAlign: "center", mt: 15 }}
        >
          <RichTextRenderer content={additional} />
        </Container>
      )}
    </Section>
  );
};

export default TeamMembers;
