import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleSignIn() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "698155839231-afnhklt7feamfna1dl6hqv01tsobvarp.apps.googleusercontent.com",
    redirectUri: makeRedirectUri(),
  });

 console.log("Request objects:", request);
console.log("Redirect URI being used:", request?.redirectUri);

  return { request, response, promptAsync };
}