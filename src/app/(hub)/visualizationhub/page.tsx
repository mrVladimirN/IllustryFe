import { findOneVisualization } from '@/app/_actions/visualization';
import HubShell from '@/components/shells/hub-shell';
import { Metadata } from 'next';
import { VisualizationFilter } from 'types/visualizations';

export const metadata: Metadata = {
  title: 'Visualizations',
  description: 'Manage your Visualizations'
};

interface VisualizationsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Hub = async ({ searchParams }: VisualizationsProps) => {
  const { name, type } = searchParams;
  const visualization = await findOneVisualization({
    name,
    type
  } as VisualizationFilter);
  return (
    <>
      <HubShell data={visualization}></HubShell>
    </>
  );
};

export default Hub;
