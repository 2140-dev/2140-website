import { SanityImage } from "@/app/shared/components/sanity-image/sanity-image";
import { colors } from "@/app/theme/colors";
import { TeamResultType } from "@/sanity/lib/results";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const SIZE = {
  xs: 50,
  md: 80,
};

interface Props {
  team: Omit<TeamResultType, "bio">;
}
export const TeamMemberTeaser = ({ team }: Props) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        background: colors.yellow[200],
        borderRadius: SIZE,
        display: "flex",
        gap: 3,
        py: 3,
        px: [3, 4],
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          borderRadius: SIZE,
          display: "flex",
          height: SIZE,
          justifyContent: "center",
          m: 1,
          maxWidth: SIZE,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            svg: {
              height: {
                xs: 70,
                md: 110,
              },
              width: {
                xs: 70,
                md: 110,
              },
            },
          }}
        >
          <OutlineCircle />
        </Box>
        <Box
          sx={{
            width: SIZE.md,
            height: SIZE.md,
            overflow: "hidden",
            borderRadius: SIZE.md,
          }}
        >
          <SanityImage image={team.picture} />
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" mb={0.5} textAlign="left">
          {team.name}
        </Typography>
        <Typography variant="body2">{team.role}</Typography>
        {(team.github || team.x) && (
          <List sx={{ display: "flex", gap: 2 }}>
            {team.github && (
              <ListItem sx={{ p: 0, width: 24 }}>
                <Link target="_blank" href={team.github}>
                  <img src="images/icons/github.svg" alt="Github icon" />
                </Link>
              </ListItem>
            )}
            {team.x && (
              <ListItem sx={{ p: 0, width: 24 }}>
                <Link target="_blank" href={team.x}>
                  <img src="images/icons/twitter.svg" alt="X icon" />
                </Link>
              </ListItem>
            )}
          </List>
        )}
      </Box>
    </Box>
  );
};

const OutlineCircle = () => {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle
        cx="55"
        cy="55"
        r="54.5"
        style={{
          stroke: colors.primary.white,
          strokeWidth: 1,
          strokeDasharray: 280,
        }}
      />
    </svg>
  );
};
