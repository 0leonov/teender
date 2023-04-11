import NavigationBar from '../components/NavigationBar'

import HeroImage from '../assets/images/herosection.png'

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className='mx-auto mt-12 p-5 container max-w-6xl'>
        <section className='grid gap-12 text-center lg:grid-cols-2 lg:text-left justify-items-center'>
          <div className='prose prose-p:text-justify'>
            <h1>Welcome to Teender</h1>
            <p>
              Find your perfect match with Teender - the stress-free dating site. Join the Teender community now and enjoy a user-friendly interface that makes it easy to connect with like-minded
              individuals, all in a safe and secure environment.
            </p>
          </div>
          <img src={HeroImage} alt='HeroImage' className='w-full max-h-96 object-contain' />
        </section>
      </div>
    </div>
  )
}

export default Home
