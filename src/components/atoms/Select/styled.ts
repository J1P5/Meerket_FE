import styled from '@emotion/styled';

export const SelectWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;

  .rs {
    /**
		 * Select Control box
		 * isFocused: SelectBox가 focus 된 상태
		 * isOpen: 메뉴가 오픈된 상태
		 */
    &__control {
      height: 50px;
      padding: 16px;
      min-height: auto;
      padding: 0.75rem 0.5rem;
      border-radius: ${({ theme }) => theme.radius.lg};
      border: 1px solid ${({ theme }) => theme.colors.grey200};
      &--is-focused,
      &--is-open {
        box-shadow: unset;
        border: 1px solid ${({ theme }) => theme.colors.grey200};
      }
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }

    /**
     * placeholder
     */
    &__placeholder {
      color: ${({ theme }) => theme.colors.grey400};
    }

    /**
		 * 선택된 value container
		 */
    &__value-container {
      padding: 0;
    }
    /**
		 * 맨 오른쪽 arrow carrot down icon
		 * separator: 아이콘과 선택된 value 사이의 선
		 */
    &__indicator {
      display: none;
      &-separator {
        display: none;
      }
    }
    /**
		 * Select 클릭 시 오픈되는 메뉴 안쪽의 option
		 * isFocused: option에 마우스가 올라간 상태
		 * isSelected: 현재 선택된 option
		 */
    &__option {
      position: relative;
      text-align: center;

      &:not(:last-child)::after {
        content: '';
        display: block;
        width: 95%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey200};

        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
      }

      &--is-focused {
        color: ${({ theme }) => theme.colors.primary};
        background-color: transparent;
      }
      &--is-selected {
        // background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background-color: transparent;
      }
      &:active {
        color: ${({ theme }) => theme.colors.primary};
        background-color: transparent;
      }
    }
  }

  color: ${({ theme }) => theme.colors.grey400};
  /* 가이드/regular */
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 18.85px */
  letter-spacing: -0.325px;
`;
