import React from 'react';

interface SkillItemProps {
  title: string;
  whatCanIDo: string[];
  borderBottom?: boolean;
}

export const SkillItem = ({
  title,
  whatCanIDo,
  borderBottom,
}: SkillItemProps) => (
  <>
    <dt className="font-bold text-xl mb-4">{title}</dt>
    <dd
      className={
        borderBottom
          ? 'border-zinc-300 dark:border-zinc-700 border-b mb-3 pb-5'
          : ''
      }
    >
      <ul className="text-sm list-disc ml-3">
        {whatCanIDo.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </dd>
  </>
);
