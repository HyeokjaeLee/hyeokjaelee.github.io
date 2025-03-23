import React from 'react';

interface SkillItemProps {
  title: string;
  whatCanIDo: string[];
}

export const SkillItem = ({ title, whatCanIDo }: SkillItemProps) => (
  <>
    <dt className="mb-4 text-xl font-bold">{title}</dt>
    <dd className="border-border mb-3 border-b pb-5 last:border-none">
      <ul className="ml-3 list-disc">
        {whatCanIDo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </dd>
  </>
);
