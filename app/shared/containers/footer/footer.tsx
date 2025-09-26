"use client";
import { RichTextRenderer } from "app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "app/shared/layouts/container/container";
import { SettingsQueryResultType } from "sanity/lib/results";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import styles from './footer.module.scss'
type Props = Pick<SettingsQueryResultType, "email" | "gpg" | "disclaimer">;

export const Footer = ({ email, disclaimer, gpg }: Props) => {
  const mailto = `mailto:${email}`;
  return (
    <Container
      size="lg"
      className={styles.footer}
    >
      <div
        className={styles.email}
      >
        <Link
          href={mailto}
          style={{ display: "inline-flex", gap: '0.5rem', alignItems: "center" }}
        >
          <img src="images/icons/email.svg" alt="" width={20} />
          <span className="text-s">
            {email}
          </span>
        </Link>
        {gpg && (
          <p>
            <b>GPG</b>: {gpg}
          </p>
        )}
      </div>
      <RichTextRenderer className={styles.text} content={disclaimer} />
    </Container>
  );
};
