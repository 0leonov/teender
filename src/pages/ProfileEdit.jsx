import FormContainer from '@components/auth/FormContainer'
import AuthContainer from '@components/auth/AuthContainer'

const ProfileEdit = () => {
  return (
    <main className='py-16 w-full grid justify-items-center'>       
      <AuthContainer className=''>
        <h1 className='text-2xl font-bold font-bold'>Edit profile</h1>
        <FormContainer>
          <div>
            <label htmlFor='name' className="label-text">Name</label>
            <input id='name' type="text" className="input input-bordered w-full text-sm" placeholder='Write your name'/>
          </div>

          <div>
            <label htmlFor='bio' className="label-text">Bio</label>
            <textarea id='bio' className="textarea textarea-bordered w-full" placeholder='Add a few words about yourself' />
           </div>
          
           <div>
            <span className='text-sm font-bold'>Sex</span>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <input id='male' type="radio" name="sex" className="radio checked:bg-blue-400" />
                <label htmlFor='male' className="label-text cursor-pointer">Male</label>
              </div>
              
              <div className='flex items-center gap-2'>
                <input id='female' type="radio" name="sex" className="radio checked:bg-rose-400" />
               <label htmlFor='female' className="label-text cursor-pointer">Female</label> 
              </div>
            </div>
          </div>

          <div className="form-control w-full max-w-xs">
              <label className="label-text font-bold">
                Av
              </label>
              <input type="file" className="file-input file-input-primary file-input-bordered w-full max-w-xs" />
            </div>
        </FormContainer>
       </AuthContainer>
    </main>
  )
}

export default ProfileEdit
