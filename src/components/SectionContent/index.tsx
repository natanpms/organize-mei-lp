import React from "react";

interface SectionContentProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
  sectionId,
  children,
  className,
}) => {
  const defaultClassName = "container mx-auto py-6 md:py-12 w-full px-4";

  return (
    <section
      id={sectionId}
      className={`${defaultClassName} ${className || ""}`}
    >
      {children}
    </section>
  );
};

export default SectionContent;
