module Settings exposing (Model, Msg, update, view, subscriptions, init)


import Html exposing (..)
import Html.Events exposing (onClick)


type alias Model =
    { page : String
    , lights : Bool
    }


type Msg
    = ChangeLight


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        ChangeLight ->
            ({model | lights = not model.lights}, Cmd.none)


view : Model -> Html Msg
view model =
    div []
        [ text model.page
        , button [onClick ChangeLight] [text "Change lights"]
        , text ("Lights: " ++ toString model.lights)
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


init : (Model, Cmd Msg)
init = 
    (Model "Settings page" False, Cmd.none)
