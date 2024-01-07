import { WithFilter, WithLegend, WithOptions } from '@/lib/types/utils';
import dynamic from 'next/dynamic';
import { TimelineData } from 'types/visualizations';
import FilteredTimelineShellView from './filter-timeline-shell';

interface TimelineShellProp extends WithLegend, WithOptions, WithFilter {
  data: TimelineData;
}
const TimelineGraphView = dynamic(() => import('@/components/views/timeline'), {
  ssr: false
});
const TimelineShellView = ({
  data,
  legend,
  options,
  filter
}: TimelineShellProp) => (
  <>
    {filter ? (
      <FilteredTimelineShellView
        options={options}
        data={data}
        legend={legend}
      />
    ) : (
      <>
        <TimelineGraphView options={options} data={data} legend={legend} />
      </>
    )}
  </>
);
export default TimelineShellView;