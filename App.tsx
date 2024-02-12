import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./src/screens/Login";
import StarshipFeed from "./src/screens/StarshipFeed";
import Terms from "./src/screens/Terms";

function App() {
  const queryClient = new QueryClient();

  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
           {/*<Login />*/}
           {/*<Terms />*/}
          <StarshipFeed />
        </PaperProvider>
      </QueryClientProvider>
    </NetworkProvider>
  );
}

export default App;

// return Storybook's UI
// export { default } from "./.storybook";
