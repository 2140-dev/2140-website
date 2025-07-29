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
      {items.map((item, index) => (
        <MuiAccordion
          expanded={expanded === `${index}`}
          onChange={onChange(`${index}`)}
          sx={{
            boxShadow: "none",
            border: `solid 1px rgba(0, 0, 0, 0.08)`,
            borderRadius: "1rem !important",
            m: 0,
            p: 0,
            my: "0.75rem !important",
            transition: "all 0.4s ease-in",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "yellow.50",
            },
            "&::before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            id={`${index}`}
            aria-controls={`${index}`}
            expandIcon={<CaretIcon sx={{ color: "primary.main" }} />}
            sx={{
              m: "0 !important",
              p: "1.5rem !important",
              ".MuiAccordionSummary-content": {
                m: "0 !important",
                pr: "1rem !important",
              },
              "&.Mui-expanded": {
                bgcolor: "yellow.50",
              },
            }}
          >
            <Typography variant="h5" sx={{ mb: 0 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ p: 2.5, pt: 0, backgroundColor: "yellow.50" }}
          >
            <RichTextRenderer content={item.content} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};
