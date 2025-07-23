"use client";
import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TOC({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const tempHeadings: Heading[] = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3');

    headingElements.forEach((heading) => {
      const id = heading.id || heading.textContent?.replace(/\s+/g, '-').toLowerCase();
      const text = heading.textContent || '';
      const level = parseInt(heading.tagName.replace('H', ''), 10);
      tempHeadings.push({ id, text, level });
    });

    setHeadings(tempHeadings);
  }, [content]);

  return (
    <nav className="sticky top-20 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`ml-${(heading.level - 1) * 4} text-sm hover:text-blue-600`}
            style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
  </nav>
  );
}