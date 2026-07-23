export interface PostData {
  slug: string;
  title: string;
  titleImage: string;
  tags: string[];
  description: string;
  /** ISO date string, used for sorting */
  date: string;
  /** Human readable label, e.g. "21년 08월 02일" */
  dateLabel: string;
}
