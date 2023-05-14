import Next from '@components/icons/Next'
import Like from '@components/icons/Like'
import Avatar from '@components/Avatar'
import CommonContainer from '@components/containers/CommonContainer'

const Main = () => {
  return (
    <CommonContainer>
      <div className='py-6 px-4 border rounded-box flex gap-4'>
        <Avatar className='w-32 h-32' src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />

        <div className='max-w-xs flex flex-col gap-2'>
          <h1 className='text-xl font-bold'>дашка, 16</h1>
          <p>расскажу анекдот : играют немец и еврей в прятки,еврей спрятался,а немец его все равно спалил🥰</p>
        </div>
      </div>

      <div className='grid grid-cols-2 w-full gap-4'>
        <button className='btn btn-lg btn-error gap-2'>
          <Next className='w-8 h-8 stroke-error-content' />
          Next
        </button>

        <button className='btn btn-lg btn-success gap-2'>
          <Like className='w-8 h-8 stroke-success-content' />
          Like
        </button>
      </div>
    </CommonContainer>
  )
}

export default Main
