import * as React from "react";
import { View, Button } from "react-native";

import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { isClerkAPIResponseError, useSSO, useUser } from "@clerk/clerk-expo";
import { ClerkAPIError } from "@clerk/types";
import { Text } from "@/components/Text";

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const { startSSOFlow } = useSSO();
  const { user, isSignedIn } = useUser();
  const [errors, setErrors] = React.useState<ClerkAPIError[]>([]);

  const handleSignInWithGoogle = React.useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: "oauth_google",
          // Defaults to current path
          redirectUrl: AuthSession.makeRedirectUri(),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Auth</Text>
      {user && <Text>{user.emailAddresses[0].emailAddress}</Text>}
      <Button title="Sign in" onPress={handleSignInWithGoogle} />
      {errors.map((error) => (
        <Text key={error.code}>{error.code}</Text>
      ))}
    </View>
  );
}
