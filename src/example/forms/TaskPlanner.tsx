import React, { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQuery } from 'react-query';
import ErrorMessage from './ErrorMessage';
import Cards from './Card';

const schema = z.object({
  userId: z.string().optional(),
  albumId: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const TaskPlanner = () => {
  const { register, handleSubmit, formState, getValues } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { data, isLoading, error, refetch } = useQuery('todos', async () => {
    const params: URLSearchParams = new URLSearchParams(clean(getValues()));
    if (params.keys().next().done) return;
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?${params}`);
    return response.json();
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted with data:', data);
    refetch();
  };

  const clean = <T extends object>(obj: T) => {
    for (let propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
        delete obj[propName];
      }
    }
    return obj;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row g-3 align-items-center'>
          <div className='col-auto'>
            <label htmlFor='userId' className='form-label'>
              User ID
            </label>
          </div>
          <div className='col-auto'>
            <input
              type='text'
              className='form-control'
              id='userId'
              {...register('userId')}
              aria-describedby='emailHelp'
            />
            {formState.errors.userId && <ErrorMessage message={formState.errors.userId.message || ''} />}
          </div>
          <div className='col-auto'>
            <label htmlFor='albumId' className='form-label'>
              Album ID
            </label>
          </div>

          <div className='col-auto'>
            <input type='text' className='form-control' id='albumId' {...register('albumId')} />
            {formState.errors.albumId && <ErrorMessage message={formState.errors.albumId.message || ''} />}
          </div>
          <div className='col-auto'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      <Suspense fallback={<h2>Loading...</h2>}>{data && <Cards data={data} />}</Suspense>
    </div>
  );
};

export default TaskPlanner;
