import { useShowChat } from "../../contexts/ShowChatContext"
import { useChatInfoHeader } from "./useChatInfoHeader"
import dotsIcon from "../../assets/icons/dots-icon.svg"
import backIcon from "../../assets/icons/back-icon.svg"

export default function ChatInfoHeader() {
  const { showChat, setShowChat } = useShowChat()
  const { chatData } = useChatInfoHeader()

  return (
    <section className="chat-header header">
      <img className="header__back" src={backIcon} alt="Ícono de volver atrás" onClick={() => setShowChat && setShowChat(!showChat)} />
      <img className="header__image" src={chatData?.avatar} alt="Imagén de $friend" />
      <div className="right">
        <span className="header__username">{chatData?.username}</span>
        <img className="header__options" src={dotsIcon} alt="Opciones" />
      </div>
    </section>
  )
}