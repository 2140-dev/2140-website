"use client";
import { CaretIcon } from "@/app/icons/caret";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { AccordionItems } from "@/app/types/accordion";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./accordion.module.scss";
interface Props {
  items: AccordionItems;
}
export const Accordion = ({ items }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const onChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {items.map((item) => (
        <MuiAccordion
          key={item._key}
          expanded={expanded === item._key}
          onChange={onChange(item._key)}
          className={styles.accordion}
        >
          <AccordionSummary
            id={item._key}
            aria-controls={item._key}
            expandIcon={<CaretIcon sx={{ color: "primary.main" }} />}
            className={styles.summary}
          >
            <Typography variant="h5" sx={{ mb: 0 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <RichTextRenderer content={item.content} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};
