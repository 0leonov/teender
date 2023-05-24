import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import BorderedContainer from '@components/containers/BorderedContainer'
import CommonContainer from '@components/containers/CommonContainer'

import instance from '@http'
import TextInput from '@components/TextInput'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const ProfileEdit = () => {
  const { username, name, age, photo, description, sex } = useSelector(state => state.user.info)

  const navigate = useNavigate()

  const onSubmit = data => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('age', data.age)
    formData.append('description', data.description)
    formData.append('sex', data.sex)
    formData.append('photo', data.photo[0])

    instance.post('user/update/', formData)
      .then(() => {
        navigate('/profile');
      })
      .catch(error => {
        console.error(error)
      });
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  useEffect(() => {
    setValue('sex', sex)
  }, [setValue])

  return (
    <CommonContainer>
      <h1 className='text-2xl font-bold'>Edit profile</h1>

      <BorderedContainer onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name='name'
          type='text'
          label='Name'
          placeholder='Write your name'
          defaultValue={name}
          error={errors.name}
          register={register}
          rules={{ required: 'Сannot be empty' }}
        />

        <TextInput
          name='age'
          type='number'
          label='Age'
          placeholder='Write your age'
          defaultValue={age}
          error={errors.age}
          register={register}
          rules={{ required: 'Сannot be empty' }}
        />

        <div className='form-control'>
          <label htmlFor='bio' className='label label-text'>Bio</label>

          <textarea
            id='bio'
            placeholder='Add a few words about yourself'
            className='textarea textarea-bordered w-full'
            defaultValue={description}
            {...register('description')}
          />
        </div>

        <div>
          <span className='text-sm'>Sex</span>

          <div className='form-control gap-2'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input {...register('sex')} value='male' type='radio' name='sex'
                     className='radio radio-sm checked:bg-blue-400' />

              <span className='label-text cursor-pointer'>Male</span>
            </label>

            <label className='flex items-center gap-2 cursor-pointer'>
              <input {...register('sex')} value='female' id='female' type='radio' name='sex'
                     className='radio radio-sm checked:bg-rose-400' />

              <span className='label-text cursor-pointer'>Female</span>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <label className='label-text font-bold'>
            Profile photo
          </label>
          <input type='file' {...register('photo')} accept='image/png, image/jpeg'
                 className='file-input file-input-primary file-input-bordered w-full' />
        </div>

        <button type='submit' className='btn btn-primary'>Save</button>
      </BorderedContainer>
    </CommonContainer>
  )
}

export default ProfileEdit
