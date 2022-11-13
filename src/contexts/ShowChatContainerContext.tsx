import { useContext } from "react"
import { createContext, useState } from "react"

interface ShowChatContainerContext {
  showChatContainer: boolean
  setShowChatContainer?: (value: boolean) => void
}

const ShowChatContainerContext = createContext<ShowChatContainerContext>({
  showChatContainer: false
})

const ShowChatContainerProvider = ({ children }: { children: React.ReactNode }) => {
  const [showChatContainer, setShowChatContainer] = useState(false)
  return (
    <ShowChatContainerContext.Provider value={{ showChatContainer, setShowChatContainer }}>
      {children}
    </ShowChatContainerContext.Provider>
  )
}

const useShowChatContainerContext = () => useContext(ShowChatContainerContext)

export { ShowChatContainerProvider, useShowChatContainerContext }
