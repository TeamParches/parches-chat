import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeAlertMessage } from "../../slicers/alertMessageSlice"
import successIcon from "../../assets/icons/success-icon.svg"
import warningIcon from "../../assets/icons/warning-icon.svg"
import closeIcon from "../../assets/icons/close-icon.svg"
import errorIcon from "../../assets/icons/error-icon.svg"
import infoIcon from "../../assets/icons/info-icon.svg"
import { RootState } from "../../ts/interfaces"

export default function AlertMessage() {
  const alertMessage = useSelector((state: RootState) => state.alertMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(closeAlertMessage())
    }, alertMessage.lifeTime)
    return () => clearTimeout(timer)
  }, [])

  const typesIcon: {
    success: string
    warning: string
    error: string
    info: string
  } = {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    info: infoIcon
  }

  return (
    <section className="alert-message">
      <img
        className="alert-message__icon alert-message__icon--type"
        src={typesIcon[alertMessage.type as keyof typeof typesIcon]}
        alt="Ícono de error"
      />
      <div className="info-message">
        <strong className="info-message__title">{alertMessage.title}</strong>
        <p className="info-message__description">{alertMessage.description}</p>
      </div>
      <img
        className="alert-message__icon alert-message__icon--close"
        src={closeIcon}
        alt="Ícono de cerrar mensaje"
        onClick={() => dispatch(closeAlertMessage())}
      />
    </section>
  )
}
