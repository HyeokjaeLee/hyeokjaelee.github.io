const className = {
  heading: 'font-bold mt-10 mb-4',
  'heading[depth=1]': 'text-4xl',
  'heading[depth=2]': 'text-3xl',
  'heading[depth=3]': 'text-2xl',
  'heading[depth=4]': 'text-xl',
  'heading[depth=5]': 'text-lg',
  'heading[depth=6]': 'text-base',
  link: 'text-blue-500 hover:underline',
  list: 'list-disc ml-5',
  listItem: 'list-item list-container',
  paragraph: 'my-4 whitespace-pre-wrap',
  blockquote: 'border-l-4 border-gray-500 pl-4 italic blockquote-container',
  table: 'table-auto my-4',
  tableCell:
    'border border-zinc-700 dark:border-zinc-400 px-4 py-2 whitespace-pre-wrap',
  tableRow: 'border border-zinc-700 dark:border-zinc-400 px-4 py-2 text-xs',
  strong: 'font-black',
  code: 'bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded-sm',
};

export { className as classMap };
