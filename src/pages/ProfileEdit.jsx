import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import instance from '@http'

import TextInput from '@components/TextInput'
import { useSelector } from 'react-redux'

const ProfileEdit = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const { age, description, name } = useSelector(state => state.user.info)

  const onSubmit = ({ name, age, description, sex, photo }) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('age', age)
    formData.append('description', description)
    formData.append('sex', sex)
    formData.append('photo', photo[0])

    instance
      .post('user/update', formData)
      .then(() => {
        navigate('/profile')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Edit profile</h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <TextInput id='name' type='text' label='Name' placeholder='Write your name' defaultValue={name} error={errors.name?.message} register={register} rules={{ required: 'Сannot be empty' }} />

        <TextInput id='age' type='number' label='Age' placeholder='Write your age' defaultValue={age} error={errors.age?.message} register={register} rules={{ required: 'Сannot be empty' }} />

        <div className='form-control'>
          <label htmlFor='bio' className='label label-text'>
            Bio
          </label>

          <textarea id='bio' placeholder='Add a few words about yourself' className='textarea textarea-bordered w-full' defaultValue={description} {...register('description')} />
        </div>

        <div>
          <span className='label label-text'>Sex</span>

          <div className='form-control gap-2'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input {...register('sex')} value='male' type='radio' name='sex' className='radio radio-sm checked:bg-blue-400' />

              <span className='cursor-pointer'>Male</span>
            </label>

            <label className='flex items-center gap-2 cursor-pointer'>
              <input {...register('sex')} value='female' id='female' type='radio' name='sex' className='radio radio-sm checked:bg-rose-400' />

              <span className='cursor-pointer'>Female</span>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <label className='label label-text'>Profile photo</label>
          <input type='file' {...register('photo')} accept='image/png, image/jpeg' className='file-input file-input-primary file-input-bordered w-full' />
        </div>

        <button className='btn btn-primary'>Save</button>
      </form>
    </div>
  )
}

export default ProfileEdit
