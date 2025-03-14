import { Text } from 'components/atoms';
import { AntennaIcon } from 'components/atoms/Icon';
import { Modal } from 'components/organisms';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from 'stores';
import { colors } from 'styles';

export const useLocationErrorEvent = () => {
  const { openModal, closeModal } = useModalStore((state) => state.actions);
  const navigate = useNavigate();

  return useCallback(
    (message: string) => {
      openModal(
        <>
          <Modal.Body>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                alignSelf: 'stretch',
              }}
            >
              <AntennaIcon size="l" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  alignSelf: 'stretch',
                }}
              >
                <Text variant="title_bold" color={colors.gray600}>
                  {message}
                </Text>
                {/* // TODO: 에러마다 바뀔 것 같아서, 나중에 prop으로 처리 */}
                <Text variant="guide_regular" color={colors.gray500}>
                  위치 권한 허용 후 다시 시도해 주세요!
                </Text>
              </div>
            </div>
          </Modal.Body>
          <Modal.ButtonContainer
            buttons={[
              {
                title: '확인',
                onClick: () => {
                  navigate(-1);
                  closeModal();
                },
              },
            ]}
          />
        </>,
      );
    },
    [openModal, closeModal],
  );
};
