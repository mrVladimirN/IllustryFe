import { Inputs, fileTypes } from "@/components/form/add-visualization-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../form";
import { ExelFileFormatter } from "./exelFileFormatFormItem";
import { JsonFileFormatter } from "./jsonFileFormatFormItem";
import { TabsContent } from "../../tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { UseFormReturn } from "react-hook-form";
import { ExtFile } from "@files-ui/react";
interface TypeTabProps {
  form: UseFormReturn<Inputs>; // Include the form context
  handleFileTypeChange: (value: string) => void;
  selectedFileType: string;
  files: ExtFile[];
  updateFiles: (files: ExtFile[]) => void;
  removeFile: (id: string) => void;
}
export function TypeTab({
  form,
  handleFileTypeChange,
  selectedFileType,
  files,
  updateFiles,
  removeFile,
}: TypeTabProps) {
  const renderFiles = (selectedFileType: string) => {
    if (selectedFileType) {
      switch (selectedFileType) {
        case fileTypes.JSON:
          return (
            <JsonFileFormatter
              acceptedFiles={files}
              updateFiles={updateFiles}
              removeFile={removeFile}
              form={form}
            />
          );
        case fileTypes.EXEL:
          return (
            <ExelFileFormatter
              acceptedFiles={files}
              updateFiles={updateFiles}
              removeFile={removeFile}
              form={form}
            />
          );
        default:
          return null;
      }
    }
  };
  return (
    <TabsContent className="w-50%" value="type">
      <div className="flex flex-col items-start gap-6 sm:flex-row">
        <FormField
          control={form.control}
          name="fileType"
          render={({ field }) => (
            <FormItem className="w-full mb-[5%]">
              <FormLabel>File Type</FormLabel>
              <FormControl>
                <Select
                  value={field.value?.toString()}
                  onValueChange={(value) => {
                    field.onChange(value);
                    handleFileTypeChange(value); // Call the handler when file type changes
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a File Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {[fileTypes.JSON,fileTypes.EXEL].map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {renderFiles(selectedFileType)}
    </TabsContent>
  );
}