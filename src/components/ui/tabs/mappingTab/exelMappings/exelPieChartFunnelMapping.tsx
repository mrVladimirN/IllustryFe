import { Inputs } from "@/components/form/add-visualization-form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface ExelPieChartFunnelMappingProps {
  form: UseFormReturn<Inputs>; // Include the form context
}
export function ExelPieChartFunnelMapping({
  form,
}: ExelPieChartFunnelMappingProps) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="w-20">Names:</div>
        <div className="flex-grow">
          <Input
            placeholder="Column numbers for Data, coma separated"
            defaultValue={form.getValues("mapping.names") || ""}
            onChange={(e) => {
              setTimeout(() => {
                const value = e.target.value;
                form.setValue("mapping.names", value);
              }, 100);
            }}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-20">Values:</div>
        <div className="flex-grow">
          <Input
            placeholder="Column numbers for Data, coma separated"
            defaultValue={form.getValues("mapping.values") || ""}
            onChange={(e) => {
              setTimeout(() => {
                const value = e.target.value;
                form.setValue("mapping.values", value);
              }, 100);
            }}
          />
        </div>
      </div>
    </>
  );
}
