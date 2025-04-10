import TextCreateAcc from './components/text-createAccount/Text-CreateAccount'
import { FormsCreateAcc } from './components/forms/FormsCreateAcc/components/Forms/FormsCreateAcc'
import InputForSocialMedia from '../formularios/FormularioLogin/components/InputForSocialMedia/InputForSocialMedia'
import { SectionOur } from './components/SectionOur/SectionOur'
import { SectionOur2 } from './components/SectionOur2/SectionOur2'

const CreatAcc = () => {
  return (
    <>
      <TextCreateAcc/>
      <FormsCreateAcc/>
      <InputForSocialMedia/>
      <SectionOur/>
      <SectionOur2/>
    </>
  )
}

export default CreatAcc
