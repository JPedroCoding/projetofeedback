import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App(){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)
  //O React precisa da função "useState" para atualizar ao na tela dinamicamente para o usuário e também usamos a função "setNotaAvaliacao" para mudar o valor da variável "notaAvaliacao" pois a função cons ultilizada no react é uma constante 
  
function handleMudarNotaAvaliacao(nota){
  setNotaAvaliacao(nota)
 //A variavél "nota" recebe o valor da nota do onclick e armazena isto na variável nota

}



  return(
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited}/>
     ) :  (
      <CardFinal notaAvaliacao={notaAvaliacao}/>

     )
  )
}
