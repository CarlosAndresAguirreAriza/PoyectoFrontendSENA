import Footer from '../../components/Footer/Footer'
// import CreatAcc from '../../components/createAccount/CreatAcc'
import Navbar from '../../components/Navbar/Navbar'

const CreateAccount = () => {
  return (
    <>
    <div className='create__Account__conteiner'>
      <Navbar white={false} scrolledOff={true}/>
      {/* <CreatAcc/> */}
      <Footer/>
    </div>
    </>
  )
}

export default CreateAccount
