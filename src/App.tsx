import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Loading } from 'components/molecules/Loading';
import { Modal } from 'components/organisms';
import { useForegroundNotification } from 'hooks';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { useModalStore } from 'stores';
import { GlobalStyle } from 'styles';
const queryClient: QueryClient = new QueryClient();

const App = () => {
  useForegroundNotification();

  // useEffect(() => {
  //   const unsubscribe = onMessage(messaging, (payload) => {
  //     console.log('메시지 수신:', payload);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const isOpen = useModalStore((store) => store.isOpen);
  const content = useModalStore((store) => store.content);
  const { closeModal } = useModalStore((store) => store.actions);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <RouterProvider
          router={router}
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
