import { Eyebrow } from "@/app/shared/components/eyebrow-1/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { TeamMember } from "@/app/shared/components/team-member/team-member";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { TeamResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";
import { PortableTextBlock } from "next-sanity";

interface Props {
  eyebrow?: string;
  variant?: "teaser" | "full";
  title: string;
  content?: PortableTextBlock;
  team: TeamResultType[];
}
const TeamMembers = ({ eyebrow, variant, title, content, team }: Props) => {
  const isTeaserVariant = variant === "teaser";
  return (
    <Section>
      <Container
        size="sm"
        sx={{
          textAlign: "center",
        }}
      >
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <Typography variant="h3" sx={getStylishMarkdown("white")}>
          <MarkdownRender>{title}</MarkdownRender>
        </Typography>
        {content && <RichTextRenderer content={content} />}
      </Container>
      <Container size="md" sx={{ mt: 10 }}>
        <Box
          sx={{
            display: "flex",
            "flex-wrap": {
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
    </Section>
  );
};

export default TeamMembers;
