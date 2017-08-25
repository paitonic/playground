module Profile exposing (Model, Msg, update, view, subscriptions, init)


import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


type alias Model =
    { page : String
    , email : String
    }


type Msg
    = ChangeEmail String


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        ChangeEmail newEmail ->
            ({model | email = newEmail}, Cmd.none)


view : Model -> Html Msg
view model =
    div []
        [ text model.page
        , input [placeholder "Email", onInput ChangeEmail] []
        , text model.email
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


init : (Model, Cmd Msg)
init = 
    (Model "Profile page" "", Cmd.none)
