import { FormProps } from "types/Form";

export const MockedData: FormProps[] = [
  {
    language: 'PT',
    title: 'Gostou do que  viu?',
    subtitle: 'Entre em contato e vamos conversar!',
    inputs: [
      {
        label: 'Nome'
      },
      {
        label: 'E-mail'
      },
      {
        label: 'Mensagem'
      }
    ],
    buttons: [
      {
        label: 'Limpar'
      },
      {
        label: 'Enviar'
      }
    ],
    notifications: [
      {
        text: 'Mensagem enviada com sucesso!'
      },
      {
        text: 'A mensagem não pôde ser enviada!'
      },
    ]
  },
  {
    language: 'EN',
    title: 'Did you like what you saw?',
    subtitle: "Get in touch and let's talk!",
    inputs: [
      {
        label: 'Name'
      },
      {
        label: 'E-mail'
      },
      {
        label: 'Message'
      }
    ],
    buttons: [
      {
        label: 'Clean'
      },
      {
        label: 'Send'
      }
    ],
    notifications: [
      {
        text: 'Message sent successfully!'
      },
      {
        text: 'The message can not be sent!'
      },
    ]
  },
  {
    language: 'IT',
    title: 'Ti è piaciuto quello che hai visto?',
    subtitle: 'Mettiti in contatto e parliamo!',
    inputs: [
      {
        label: 'Nome'
      },
      {
        label: 'E-mail'
      },
      {
        label: 'Messaggio'
      }
    ],
    buttons: [
      {
        label: 'Chiari'
      },
      {
        label: 'Invia'
      }
    ],
    notifications: [
      {
        text: 'Messaggio inviato con successo!'
      },
      {
        text: 'Impossibile inviare il messaggio!'
      },
    ]
  },
];