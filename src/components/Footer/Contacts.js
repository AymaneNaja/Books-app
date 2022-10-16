
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillRedditCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Contacts = () => {
  return (
    <div className='w-2/6'>
        <h1>Contacts</h1>
        <p>Please contact us for more info:</p>
        <div className='flex justify-center gap-1 scale-150'>
            <BsFacebook/>
            <AiFillTwitterCircle/>
            <AiFillRedditCircle/>
            <AiFillLinkedin/>
            <AiFillInstagram/>
        </div>
    </div>
  )
}

export default Contacts