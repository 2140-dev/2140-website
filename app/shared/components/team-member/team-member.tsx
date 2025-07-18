import { TeamResultType } from "@/sanity/lib/results";
import { Box } from "@mui/material";
import { TeamMemberFull } from "./team-member-full";
import { TeamMemberTeaser } from "./team-member-teaser";

interface Props {
  variant?: "teaser" | "full";
  team: TeamResultType;
}
export const TeamMember = ({ variant = "teaser", team }: Props) => {
  const isTeaserVariant = variant === "teaser";
  return (
    <Box
      width="100%"
      maxWidth={{
        md: isTeaserVariant ? "50%" : "calc(100% / 3)",
      }}
    >
      {variant === "teaser" ? (
        <TeamMemberTeaser team={team} />
      ) : (
        <TeamMemberFull team={team} />
      )}
    </Box>
  );
};
