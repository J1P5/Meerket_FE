import { Text } from 'components/atoms';
import { AntennaIcon } from 'components/atoms/Icon';
import { Modal } from 'components/organisms';
import { LocationError } from 'constants/errorMessage';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from 'stores';
import { colors } from 'styles';
import { LocationErrorCode } from 'types';

export const useLocationErrorEvent = () => {
  const { openModal, closeModal } = useModalStore((state) => state.actions);
  const navigate = useNavigate();

  return useCallback(
    (errorCode: LocationErrorCode) => {
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
                  {LocationError[errorCode].title}
                </Text>
                <Text variant="guide_regular" color={colors.gray500}>
                  {LocationError[errorCode].message}
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
