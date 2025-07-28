import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { SanityImage } from "@/app/shared/components/sanity-image/sanity-image";
import { colors } from "@/app/theme/colors";
import { TeamResultType } from "@/sanity/lib/results";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const SIZE = 100;

interface Props {
  team: TeamResultType;
}
export const TeamMemberFull = ({ team }: Props) => {
  return (
    <Box width="100%">
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: 130,
          mb: 5,
          pt: 3,
        }}
      >
        <Box
          sx={{
            position: "absolute",
          }}
        >
          <OutlineCircle />
        </Box>
        <Box
          sx={{
            width: SIZE,
            height: SIZE,
            overflow: "hidden",
            borderRadius: "100%",
          }}
        >
          <SanityImage image={team.picture} />
        </Box>
      </Box>
      <Typography variant="h4" mb={0.5}>
        {team.name}
      </Typography>
      <Typography variant="body1" color="gray.200">
        {team.role}
      </Typography>
      {(team.github || team.x) && (
        <List sx={{ display: "flex", gap: 2 }}>
          {team.github && (
            <ListItem sx={{ p: 0, width: 16 }}>
              <Link target="_blank" href={team.github}>
                <img src="images/icons/github-black.svg" alt="Github icon" />
              </Link>
            </ListItem>
          )}
          {team.x && (
            <ListItem sx={{ p: 0, width: 16 }}>
              <Link target="_blank" href={team.x}>
                <img src="images/icons/twitter-black.svg" alt="X icon" />
              </Link>
            </ListItem>
          )}
        </List>
      )}
      <RichTextRenderer content={team.bio} />
    </Box>
  );
};

const OutlineCircle = () => {
  return (
    <svg width="150" height="150" viewBox="0 0 130 130" fill="none">
      <circle
        cx="65"
        cy="65"
        r="54.5"
        style={{
          stroke: colors.yellow[200],
          strokeWidth: 1,
          strokeDasharray: 280,
        }}
      />
    </svg>
  );
};
