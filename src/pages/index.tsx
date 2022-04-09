import Center from 'components/Center'
import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Index() {
  return (
    <>
      <Center>
        <Image
          src={logo}
          alt="6 quadrados no formato final da tabela periodica, o primeiro quadrado apresenta um destaque a mais, pois representa o simbolo do Carbono. Abaixo está o nome da empresa: Carbonicca."
          width="165"
          height="108"
        />
      </Center>
    </>
  )
}
