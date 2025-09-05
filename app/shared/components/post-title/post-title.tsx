import { Image } from "app/types/image";
// import "./styles.scss";
import { CoverImage } from "app/shared/components/cover-image/cover-image";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  excerpt?: string | null;
  image?: Image | null;
  date?: string | null;
}
export const PostTitle = ({ title, excerpt, image, date }: Props) => {
  return (
    <div className="container-l text-center page-title">
      <div className="container">
        <Typography variant="h1" mb={4}>
          {title}
        </Typography>
        {excerpt && <p className="excerpt">{excerpt}</p>}
        {date && (
          <p className="date mt-2">
            {/* {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} */}
          </p>
        )}
      </div>
      {image && <CoverImage image={image} />}
    </div>
  );
};
