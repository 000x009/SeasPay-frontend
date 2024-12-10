import { forwardRef, useState } from 'react';
import styles from './FormInput.module.css';

import { classNames } from '@telegram-apps/telegram-ui/dist/helpers/classNames';
import { callMultiple } from '@telegram-apps/telegram-ui/dist/helpers/function';
import { hasReactNode } from '@telegram-apps/telegram-ui/dist/helpers/react/node';

import { FormInputTitle } from '@telegram-apps/telegram-ui/dist/components/Form/FormInput/components/FormInputTitle';

const platformStyles = {
  base: styles['wrapper--base'],
  ios: styles['wrapper--ios'],
};

const formStatusStyles = {
  default: styles['wrapper--default'],
  error: styles['wrapper--error'],
  focused: styles['wrapper--focused'],
};

export const FormInput = forwardRef(({
  status,
  header,
  before,
  after,
  disabled,
  children,
  className,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...restProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const formStatus = status || (isFocused ? 'focused' : 'default');

  const onFocus = callMultiple(onFocusProp, () => {
    if (disabled) {
      return;
    }

    setIsFocused(true);
  });
  const onBlur = callMultiple(onBlurProp, () => setIsFocused(false));

  return (
    <div
      ref={ref}
      className={classNames(
        styles.wrapper,
        platformStyles["base"],
        formStatusStyles[formStatus],
        disabled && styles['wrapper--disabled'],
      )}
      aria-disabled={disabled}
    >
      <label
        aria-disabled={disabled}
        className={classNames(styles.body, className)}
        onFocus={onFocus}
        onBlur={onBlur}
        {...restProps}
      >
        {hasReactNode(before) && (
          <div className={styles.before}>
            {before}
          </div>
        )}
        {children}
        {hasReactNode(after) && (
          <div className={styles.after}>
            {after}
          </div>
        )}
      </label>
        <FormInputTitle className={styles.title}>{header}</FormInputTitle>
    </div>
  );
});
