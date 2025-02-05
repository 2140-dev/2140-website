import { Image } from "@/app/types/image";
import "./styles.scss";
import { CoverImage } from "@/app/components/CoverImage/CoverImage";

interface Props {
  title: string;
  excerpt?: string | null;
  image?: Image | null;
  date?: string | null;
}
export const PageTitle = ({ title, excerpt, image, date }: Props) => {
  return (
    <div className="container-l text-center page-title">
      <div className="container">
        <h1>{title}</h1>
        {excerpt && <p className="excerpt">{excerpt}</p>}
        {date && (
          <p className="date mt-2">
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>
      {image && <CoverImage image={image} />}
    </div>
  );
};
