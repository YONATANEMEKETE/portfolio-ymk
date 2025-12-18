import React from 'react';

interface Props {
  text: string;
}

const SectionBadge = ({ text }: Props) => {
  return (
    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
      {text}
    </div>
  );
};

export default SectionBadge;
