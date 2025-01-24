import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "styles";
import { useForegroundNotification } from "hooks";
import { Modal } from "components/organisms";
import { useModalStore } from "stores";
import { Loading } from "components/molecules/Loading";
//import { router } from "router";
import { routerTest } from "router";
const queryClient: QueryClient = new QueryClient();

const App = () => {
  useForegroundNotification();
  const isOpen = useModalStore((store) => store.isOpen);
  const content = useModalStore((store) => store.content);
  const { closeModal } = useModalStore((store) => store.actions);

  console.log("05_35_RouterTest");

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <RouterProvider
          router={routerTest}
          future={{
            v7_startTransition: true,
          }}
        />
      </Suspense>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Background hasClickEvent />
        <Modal.Container>{content}</Modal.Container>
      </Modal>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
