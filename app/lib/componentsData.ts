import path from 'path';
import { promises as fs } from 'fs';
import type { FC } from 'react';
import InteractiveButton from '../components/DisplayComponents/InteractiveButton';
import TextAnimation from '../components/DisplayComponents/TextAnimation';

// IMPORT NEW COMPONENTS HERE AS NEEDED
// import Card from '../components/Card';
// import Input from '../components/Input';

export interface ComponentItem {
  slug: string;
  name: string;
  description: string;
  fileLocation: string;
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
    fileLocation: string;
    component: FC<any>;
    usageCodePath: string;
    features: string[];
  }> = [
    {
      slug: 'interactive-button',
      name: '3D Perspective Button',
      description: 'A tactile 3D button with a CSS perspective transform that reveals a profile and icon pairing on hover.',
      fileLocation: 'components/InteractiveButton.tsx',
      component: InteractiveButton,
      usageCodePath: 'app/components/DisplayComponents/InteractiveButton.tsx',
      features: ['3D Perspective & Rotation', 'Hover reveal effect', 'Tactile box-shadow depth', 'Active state compression'],
    },
    {
      slug: 'text-animation',
      name: 'Status Text Scroller',
      description: 'Infinite vertical scroll animation with a pulsing status dot.',
      fileLocation: 'components/TextAnimation.tsx',
      component: TextAnimation,
      usageCodePath: 'app/components/DisplayComponents/TextAnimation.tsx',
      features: ['Pulsing indicator', 'Spring-based scrolling', 'Infinite loop'],
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
    fileLocation: item.fileLocation,
    component: item.component,
    usageCode: usageCodes[idx],
    features: item.features,
  }));
}
