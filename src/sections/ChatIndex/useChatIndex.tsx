import { useLazyQuery } from "@apollo/client"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserLoggedField } from "../../slicers/userLoggedSlice"
import { createAlertMessage } from "../../slicers/alertMessageSlice"
import { userLoggedId } from "../../graphql/queries/queries"

export const useChatIndex = () => {
  const [getUserLoggedId, { loading }] = useLazyQuery(userLoggedId, {
    onCompleted: data => {
      console.log(data)
      dispatch(setUserLoggedField(data.user))
    },
    onError: error => {
      console.log(error)
      dispatch(
        createAlertMessage({
          title: `Ha ocurrido un error inesperado`,
          description: error,
          type: "error",
          visible: true
        })
      )
    }
  })
  const userLogged = useSelector((state: any) => state.userLogged)
  const dispatch = useDispatch()

  useEffect(() => {
    const userAlreadyLogged = Object.keys(userLogged).length !== 0
    if (userAlreadyLogged) return
    getUserLoggedId()
  }, [userLogged, loading])

  return {}
}
