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
    <dt className="mb-4 text-xl font-bold">{title}</dt>
    <dd className={borderBottom ? 'mb-3 border-b border-zinc-700 pb-5' : ''}>
      <ul className="ml-3 list-disc text-sm">
        {whatCanIDo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </dd>
  </>
);
