import path from 'path';
import { promises as fs } from 'fs';
import type { FC } from 'react';
import InteractiveButton from '../components/DisplayComponents/InteractiveButton';

// IMPORT NEW COMPONENTS HERE AS NEEDED
// import Card from '../components/Card';
// import Input from '../components/Input';

export interface ComponentItem {
  slug: string;
  name: string;
  description: string;
  component: FC<any>;
  usageCode: string;
  features: string[];
}

// Cache for usage codes per component path
const usageCodeCache: Record<string, string> = {};

/**
 * Load usage code for a given component file path. Uses an in-memory cache.
 * @param relativePath - Path relative to the project root (e.g., 'app/components/Button.tsx')
 */
async function loadUsageCode(relativePath: string): Promise<string> {
  if (usageCodeCache[relativePath]) return usageCodeCache[relativePath];

  try {
    const fullPath = path.isAbsolute(relativePath)
      ? relativePath
      : path.join(process.cwd(), relativePath);
    const code = await fs.readFile(fullPath, 'utf-8');
    usageCodeCache[relativePath] = code;
  } catch {
    usageCodeCache[relativePath] = '// Source code not found';
  }

  return usageCodeCache[relativePath];
}

export async function getComponentsData(): Promise<ComponentItem[]> {
  // Define all components you want to display in the list
  // Add new entries here as new components are added
  const componentList: Array<{
    slug: string;
    name: string;
    description: string;
    component: FC<any>;
    usageCodePath: string;
    features: string[];
  }> = [
    {
      slug: 'interactive-button',
      name: 'Interactive Button',
      description: 'A button with specific styles.',
      component: InteractiveButton,
      usageCodePath: 'app/components/DisplayComponents/InteractiveButton.tsx',
      features: ['Blue Background', 'White Text', 'Padding included'],
    },

  ];

  // Load usageCode for each component in parallel
  const usageCodes = await Promise.all(
    componentList.map(item => loadUsageCode(item.usageCodePath))
  );

  // Merge usage codes with the component data
  return componentList.map((item, idx) => ({
    slug: item.slug,
    name: item.name,
    description: item.description,
    component: item.component,
    usageCode: usageCodes[idx],
    features: item.features,
  }));
}
