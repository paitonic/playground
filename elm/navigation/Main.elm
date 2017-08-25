module Main exposing (main)

import Navigation
import Html exposing (..)
import Html.Attributes exposing (href)
import Settings
import Profile


main : Program Never Model Msg
main =
    Navigation.program
        ChangeUrl
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

type Page = Settings Settings.Model
    | Profile Profile.Model
    | NotFound

type alias Model =
    { activePage : Page
    }


type Msg
    = ChangeUrl Navigation.Location
    | SettingsMsg Settings.Msg
    | ProfileMsg Profile.Msg


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case (msg, model.activePage) of
        (ChangeUrl location, _) ->
            matchPage location

        (SettingsMsg settingsMsg, Settings settingsModel) ->
            let
                (updatedModel, cmd) = Settings.update settingsMsg settingsModel
            in
                (Model (Settings updatedModel), Cmd.map SettingsMsg cmd)

        (ProfileMsg profileMsg, Profile profileModel) ->
            let
                (updatedModel, cmd) = Profile.update profileMsg profileModel
            in
                (Model (Profile updatedModel), Cmd.map ProfileMsg cmd)

        (_, _) ->
            (model, Cmd.none)


view : Model -> Html Msg
view model =
    div []
        [ text "Main"
        , viewHeader model
        , viewPage model
        ]

{-
    Settings.view and Profile.view emit different Msg
    Therefore, we declare SettingsMsg Settings.Msg, ProfileMsg Profile.Msg which will hold the
    original message.
    However, to make the viewPage work it must emit Html Msg messages, to do that, 
    we map the original message, for example  Html Settings.Msg, to Html SettingsMsg
    Since SettingsMsg expects Settings.Msg as a paremeter, SettingsMsg will hold the original message. 
-}
viewPage model =
    case model.activePage of
        Settings model ->
            Settings.view model |> Html.map SettingsMsg

        Profile model ->
            Profile.view model |> Html.map ProfileMsg
        
        NotFound ->
            div [] [text "Page Not Found"]

viewHeader model =
    div []
        [ div [] [text (toString model)]
        , div [] [
            a [href "#/settings"] [text "Settings"]
            ]
        , div [] [
            a [href "#/profile"] [text "Profile"]
            ]
        ]

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


init : Navigation.Location -> (Model, Cmd Msg)
init location = 
    matchPage location


matchPage : Navigation.Location -> (Model, Cmd Msg)
matchPage location =
    case location.hash of
        "#/settings" ->
            let
                (model, cmd) = Settings.init
            in
                (Model (Settings model), Cmd.map SettingsMsg cmd)
        "#/profile" ->
            let
                (model, cmd) = Profile.init
            in
                (Model (Profile model), Cmd.map ProfileMsg cmd)
        _ ->
            (Model NotFound, Cmd.none)