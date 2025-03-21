import {
  ToggleSwitch,
  Field,
  Callout,
  FieldRow,
  FieldLabel,
  FieldHint,
} from '@rocket.chat/fuselage';
import type { ChangeEvent, FC } from 'react';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'redux';

import type { RootAction } from '../../../../store/actions';
import type { RootState } from '../../../../store/rootReducer';
import { SETTINGS_SET_FLASHFRAME_OPT_IN_CHANGED } from '../../../actions';

type Props = {
  className?: string;
};

export const FlashFrame: FC<Props> = (props) => {
  const isFlashFrameEnabled = useSelector(
    ({ isFlashFrameEnabled }: RootState) => isFlashFrameEnabled
  );
  const dispatch = useDispatch<Dispatch<RootAction>>();
  const { t } = useTranslation();
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.currentTarget.checked;
      dispatch({
        type: SETTINGS_SET_FLASHFRAME_OPT_IN_CHANGED,
        payload: isChecked,
      });
    },
    [dispatch]
  );

  return (
    <Field className={props.className}>
      <FieldRow>
        <ToggleSwitch onChange={handleChange} checked={isFlashFrameEnabled} />
        <FieldLabel htmlFor='toggle-switch'>
          {process.platform !== 'darwin'
            ? t('settings.options.flashFrame.title')
            : t('settings.options.flashFrame.titleDarwin')}
        </FieldLabel>
      </FieldRow>
      {process.platform === 'linux' && (
        <Callout
          title={t('settings.options.flashFrame.onLinux')}
          type='warning'
        />
      )}
      <FieldRow>
        <FieldHint>
          {process.platform !== 'darwin'
            ? t('settings.options.flashFrame.description')
            : t('settings.options.flashFrame.descriptionDarwin')}
        </FieldHint>
      </FieldRow>
    </Field>
  );
};
