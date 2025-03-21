import { Field, Button, FieldRow, FieldHint } from '@rocket.chat/fuselage';
import type { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { dispatch } from '../../../../store';
import { SETTINGS_CLEAR_PERMITTED_SCREEN_CAPTURE_PERMISSIONS } from '../../../actions';

type Props = {
  className?: string;
};

export const ClearPermittedScreenCaptureServers: FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <Field className={props.className}>
      <FieldRow>
        <Button
          danger
          onClick={async () => {
            console.log('Clearing permitted screen capture servers');
            dispatch({
              type: SETTINGS_CLEAR_PERMITTED_SCREEN_CAPTURE_PERMISSIONS,
            });
          }}
        >
          {t('settings.options.clearPermittedScreenCaptureServers.title')}
        </Button>
      </FieldRow>
      <FieldRow>
        <FieldHint>
          {t('settings.options.clearPermittedScreenCaptureServers.description')}
        </FieldHint>
      </FieldRow>
    </Field>
  );
};
