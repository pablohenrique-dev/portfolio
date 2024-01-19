import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        ul: ({ children }) => (
          <ul className="flex list-inside list-disc flex-col gap-3 pl-2">
            {children}
          </ul>
        ),
        a: ({ children }) => (
          <a className="cursor-pointer text-primary">{children}</a>
        ),
        p: ({ children }) => <p className="mb-4">{children}</p>,
      }}
    />
  );
};
