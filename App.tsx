import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigator from "~/navigation/Navigator";

function App() {
  const queryClient = new QueryClient();

  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <Navigator />
          {/* <Login />*/}
          {/* <Terms />*/}
          {/*<StarshipFeed />*/}
        </PaperProvider>
      </QueryClientProvider>
    </NetworkProvider>
  );
}

export default App;

// return Storybook's UI
// export { default } from "./.storybook";
