import { useForm } from "react-hook-form";

import FormContainer from '@components/auth/FormContainer'
import AuthContainer from '@components/auth/AuthContainer'

import instance from '@http'

const ProfileEdit = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => instance.post('user/update', data);

  return (
    <main className='py-16 w-full grid justify-items-center'>       
      <AuthContainer>
        <h1 className='text-2xl font-bold'>Edit profile</h1>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name' className="label-text font-bold">Name</label>
            <input id='name' {...register("name")} type="text" className="input input-bordered w-full text-sm" placeholder='Write your name'/>
          </div>

          <div>
            <label htmlFor='age' className="label-text font-bold">Age</label>
            <input id='age' {...register("age")} type="number" className="input input-bordered w-full text-sm" placeholder='Write your age'/>
          </div>

          <div>
            <label htmlFor='bio' className="label-text font-bold">Bio</label>
            <textarea id='bio' {...register("description")} className="textarea textarea-bordered w-full" placeholder='Add a few words about yourself' />
           </div>
          
           <div>
            <span className='text-sm font-bold'>Sex</span>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <input {...register("sex")} value='male' id='male' type="radio" name="sex" className="radio checked:bg-blue-400" />
                <label htmlFor='male' className="label-text cursor-pointer">Male</label>
              </div>
              
              <div className='flex items-center gap-2'>
                <input {...register("sex")} value='female' id='female' type="radio" name="sex" className="radio checked:bg-rose-400" />
               <label htmlFor='female' className="label-text cursor-pointer">Female</label> 
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="label-text font-bold">
              Profile photo
            </label>
            <input type="file" {...register("photo")} accept="image/png, image/jpeg" className="file-input file-input-primary file-input-bordered w-full" />
          </div>

          <button type="submit" className='btn btn-primary'>Save</button>
        </FormContainer>
       </AuthContainer>
    </main>
  )
}

export default ProfileEdit
