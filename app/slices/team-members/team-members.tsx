import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { TeamMember } from "@/app/shared/components/team-member/team-member";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { TeamResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";

interface Props {
  eyebrow?: string;
  variant?: "teaser" | "full";
  title: string;
  summary?: string;
  team: TeamResultType[];
}
const TeamMembers = ({ eyebrow, variant, title, summary, team }: Props) => {
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
    </Section>
  );
};

export default TeamMembers;
