import { FloatingWhatsApp } from 'react-floating-whatsapp';

interface watsProps {
    phoneNumber : string,
    chatMessage : string,
    placeholder : string,
    statusMessage: string
}

export default function WatsButton(props : watsProps) {

  return (
      <FloatingWhatsApp 
      phoneNumber='521427157000' 
      accountName='Laboratorio Médico del Campanario' 
      placeholder= "Escriba el mensaje"
      chatMessage= "Hola, en que te puedo ayudar"/>
  )
}