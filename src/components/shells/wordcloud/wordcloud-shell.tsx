import { WordCloudData } from 'types/visualizations';
import { WithFilter, WithLegend, WithOptions } from '@/lib/types/utils';
import dynamic from 'next/dynamic';
import FilteredWordCloudGraphShellView from './filter-wordcloud-shell';

interface WordCloudShellProp extends WithLegend, WithOptions, WithFilter {
  data: WordCloudData;
}
const WordCloudGraphView = dynamic(
  () => import('@/components/views/wordcloud'),
  { ssr: false }
);
const WordCloudShellView = ({
  data, legend, options, filter
}: WordCloudShellProp) => {
  const { words } = data;
  return (
    <>
      {filter ? (
        <FilteredWordCloudGraphShellView
          options={options}
          words= {words}
          legend={legend}
        />
      ) : (
        <>
          <WordCloudGraphView
            options={options}
            words= {words}
            legend={legend}
          />
        </>
      )}
    </>
  );
};
export default WordCloudShellView;
