import type { Metadata } from 'next';

import AddProjectForm from '@/components/form/add-project-form';

export const metadata: Metadata = {
  title: 'New Project',
  description: 'Add a new project'
};

export default async function NewProjectPage() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-50 rounded-3xl dark:bg-gray-800">
      <div className="space-y-2.5">
        <AddProjectForm />
      </div>
    </div>
  );
}
