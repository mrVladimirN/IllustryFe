import { WithFilter, WithLegend, WithOptions } from '@/lib/types/utils';
import { computeCategories } from '@/lib/visualizations/hierarchy-charts/helper';
import dynamic from 'next/dynamic';
import { HierarchyData } from 'types/visualizations';
import FilteredSunburstShellView from './filtered-sunburst-shell';

interface SunBurstShellProp extends WithLegend, WithOptions, WithFilter {
  data: HierarchyData;
}
const SunBurstGraphView = dynamic(
  () => import('@/components/views/sunburst-chart'),
  { ssr: false }
);
const SunBurstShellView = ({
  data,
  legend,
  options,
  filter
}: SunBurstShellProp) => {
  const { nodes } = data;
  const categories = computeCategories(nodes);
  return (
    <>
      {filter ? (
        <FilteredSunburstShellView
          options={options}
          nodes={nodes}
          categories={categories}
          legend={legend}
        />
      ) : (
        <>
          <SunBurstGraphView
            options={options}
            nodes={nodes}
            categories={categories}
            legend={legend}
          />
        </>
      )}
    </>
  );
};
export default SunBurstShellView;