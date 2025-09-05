import { TeamResultType } from "@/sanity/lib/results";
import { Grid } from "@mui/material";
import { TeamMemberFull } from "./team-member-full";
import { TeamMemberTeaser } from "./team-member-teaser";

interface Props {
  variant?: "teaser" | "full";
  team: TeamResultType;
}
export const TeamMember = ({ variant = "teaser", team }: Props) => {
  return (
    <Grid item md={variant === "teaser" ? 6 : 4}>
      {variant === "teaser" ? (
        <TeamMemberTeaser team={team} />
      ) : (
        <TeamMemberFull team={team} />
      )}
    </Grid>
  );
};
