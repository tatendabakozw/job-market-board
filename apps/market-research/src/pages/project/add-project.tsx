import React, { useState } from 'react';
import { getMessage } from '../../helpers/getMessage';
import GeneralLayout from '../../layouts/GeneralLayout';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import CustomInput from '../../components/inputs/CustomInput';
import { createUser } from '../../services/projectService';
import { useRouter } from 'next/navigation';

function AddProject() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [assigned_researcher, setAssignedResearcher] = useState('');
  const [expiry_days, setExpiryDays] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createNewProduct = async () => {
    try {
      setLoading(true);
      const newUser = await createUser(
        name,
        description,
        status,
        assigned_researcher
      );

      console.log('New user from database', newUser);

      setName('');
      setDescription('');
      setStatus('');
      setExpiryDays('');
      setLoading(false);
      router.push('/');
    } catch (error) {
      console.log(getMessage(error));
      setLoading(false);
    }
  };
  return (
    <GeneralLayout>
      <div className="bg-secondary">
        <div className="max-w-7xl px-4 py-16 w-full mx-auto space-y-4">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col space-y-1">
              <p className="text-start font-bold heading-text text-3xl ">
                Add new project
              </p>
              <p className="text-start main-text text-sm text-zinc-500 max-w-2xl">
                Use this page to add a new item to your projects
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-8">
              <div className="bg-primary main-border p-4 flex-col space-y-4 rounded-lg">
                <p className="font-medium heading-text">Basic Information</p>
                <div className="main-border p-4 rounded-lg">
                  <p className="main-text text-sm capitalize pb-1">
                    Product name
                  </p>
                  <CustomInput
                    value={name}
                    setValue={setName}
                    placeholder="Name"
                  />

                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Due date
                  </p>
                  <CustomInput
                    value={expiry_days}
                    setValue={setExpiryDays}
                    placeholder="Days to expire"
                  />

                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Product description
                  </p>
                  <CustomInput
                    value={description}
                    textarea
                    rows={5}
                    setValue={setDescription}
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="bg-primary main-border p-4 flex-col space-y-4 rounded-lg">
                <p className="font-medium heading-text">Additional Info</p>
                <div className="main-border p-4 rounded-lg">
                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Assigned researcher
                  </p>
                  <CustomInput
                    value={assigned_researcher}
                    setValue={setAssignedResearcher}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="bg-primary main-border p-4 flex-col space-y-4 rounded-lg">
                <p className="font-medium heading-text">status</p>
                <div className="main-border p-4 rounded-lg">
                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Unit status
                  </p>
                  <CustomInput
                    value={status}
                    setValue={setStatus}
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <PrimaryButton
                text={'Add project'}
                loading={loading}
                onClick={createNewProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default AddProject;
