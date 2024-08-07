// eslint-disable-next-line import/no-cycle
import { Inputs } from '@/components/form/add-visualization-form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';

interface ExcelOrCsvScatterMappingProps {
  form: UseFormReturn<Inputs>; // Include the form context
}
function ExcelOrCsvScatterMapping({ form }: ExcelOrCsvScatterMappingProps) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="w-20">Categories:</div>
        <div className="flex-grow">
          <Input
            placeholder="Column number for Categories"
            defaultValue={form.getValues('mapping.categories') || ''}
            onChange={(e) => {
              setTimeout(() => {
                const { value } = e.target;
                form.setValue('mapping.categories', value);
              }, 100);
            }}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-20">Values:</div>
        <div className="flex-grow">
          <Input
            placeholder="Column numbers for Values, coma separated"
            defaultValue={form.getValues('mapping.values') || ''}
            onChange={(e) => {
              setTimeout(() => {
                const { value } = e.target;
                form.setValue('mapping.values', value);
              }, 100);
            }}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-20">Properties:</div>
        <div className="flex-grow">
          <Input
            placeholder="Column number for Properties"
            defaultValue={form.getValues('mapping.properties') || ''}
            onChange={(e) => {
              const { value } = e.target;
              form.setValue('mapping.properties', value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ExcelOrCsvScatterMapping;
