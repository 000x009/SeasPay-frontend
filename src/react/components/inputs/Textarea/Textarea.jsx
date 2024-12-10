'use client';

import { forwardRef } from 'react';
import styles from './Textarea.module.css';

import { classNames } from '@telegram-apps/telegram-ui/dist/helpers/classNames';
import { usePlatform } from '@telegram-apps/telegram-ui/dist/hooks/usePlatform';

import { FormInput } from '../FormInput/FormInput';
import { Subheadline } from '@telegram-apps/telegram-ui/dist/components/Typography/Subheadline/Subheadline';
import { Text } from '@telegram-apps/telegram-ui/dist/components/Typography/Text/Text';

export const Textarea = forwardRef(({
  header,
  status,
  className,
  ...restProps
}, ref) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      status={status}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
    >
      <TypographyComponent
        ref={ref}
        Component="textarea"
        className={styles.textarea}
        {...restProps}
      />
    </FormInput>
  );
});
