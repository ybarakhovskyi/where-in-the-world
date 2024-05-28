import { FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/common/components/Button';
import { ButtonSize } from '@/common/components/Button/types';
import { Icon } from '@/common/components/Icon';
import { FaArrowLeft } from 'react-icons/fa6';

export const BackButton: FC = () => {
  const { back } = useRouter();
  const handleOnClick = useCallback(() => {
    back();
  }, [back]);

  return (
    <Button
      label="Back"
      size={ButtonSize.SMALL}
      onClick={handleOnClick}
      icon={<Icon icon={FaArrowLeft} />}
    />
  );
};
