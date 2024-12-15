import { forwardRef } from 'react';
import styles from './Input.module.css';

import { classNames } from '@telegram-apps/telegram-ui/dist/helpers/classNames';
import { usePlatform } from '@telegram-apps/telegram-ui/dist/hooks/usePlatform';

import { FormInput } from '../FormInput/FormInput';
import { Subheadline } from '@telegram-apps/telegram-ui/dist/components/Typography/Subheadline/Subheadline';
import { Text } from '@telegram-apps/telegram-ui/dist/components/Typography/Text/Text';


export const Input = forwardRef(({
  type = 'text',
  header,
  before,
  after,
  status,
  className,
  disabled,
  ...restProps
}, ref) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      before={before}
      after={after}
      status={status}
      disabled={disabled}
      className={classNames(
        styles.wrapper,
        platform === 'base',
        className,
      )}
    >
      <TypographyComponent
        ref={ref}
        Component="input"
        className={styles.input}
        type={type}
        disabled={disabled}
        {...restProps}
      />
    </FormInput>
  );
});
