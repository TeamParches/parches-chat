import parchesChatIcon from "../../assets/icons/parches-chat-icon.svg"
import FormGroupInput from "../../components/FormGroupInput/FormGroupInput"
import AccountQuestion from "../../components/AccountQuestion/AccountQuestion"
import { useSubmitForm } from "../../hooks/useSubmitForm"
import ViewRepository from "../../components/ViewRepository/ViewRepository"

export default function Login() {
  const { handleSubmit } = useSubmitForm()

  return (
    <section className="login">
      <div className="content">
        <header className="header">
          <img className="content__image" src={parchesChatIcon} alt="Ícono de Parches Chat" />
          <h1 className="content__title">Parches Chat</h1>
          <p className="content__description">Agrega a tus amigos, envía mensajes, crea o únete a un grupo, y mucho más!</p>
        </header>
        <form className="form" onSubmit={e => handleSubmit(e, "login", "/chat")}>
          <FormGroupInput type="email" label="Correo electrónico" placeholder="example@gmail.com" required={true} />
          <FormGroupInput type="password" label="Contraseña" placeholder="example196" minLength={4} maxLength={15} required={true} />
          <input className="form__submit" type="submit" value="Ingresar" />
          <AccountQuestion question="¿No estas registrado?" href="/accounts/register" hrefText="Registrarse" />
        </form>
      </div>
      <ViewRepository />
    </section>
  )
}