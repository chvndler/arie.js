'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type Component = {
  id: string;
  name: string;
};

export const ComponentList = () => () => {
  const [components, setComponents] = useState<Component[]>([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const components = await getComponents();
      setComponents(components);
    };
    fetchComponents();
  }, []);

  return (
    <div>
      <h1>Components</h1>
      <ul>
        {components.map((component) => (
          <li key={component.id}>
            <Link href={`/components/${component.id}`}>{component.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getComponents = async (): Promise<Component[]> => {
  const response = await fetch('/api/components');
  const data = await response.json();
  return data;
};