import React from 'react';
import { Button } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';

import SelectCountry from './SelectCountry';
import SelectCity from './SelectCity';
import SelectArea from './SelectArea';
import { countryHasAreas } from './state';
import { TFields } from './types';
import { labelStyles } from './style';

export default function LocationForm() {
  const formMethods = useForm<TFields>();

  const errors = formMethods.errors;
  const { country, city } = formMethods.watch(['country', 'city']);
  const hasAreas = countryHasAreas(country, city);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <label>
          <p css={labelStyles}>Country</p>
          <SelectCountry autoFocus />
        </label>

        {errors.country && (
          <div style={{ color: 'red' }}>{errors.country.message}</div>
        )}

        <label>
          <p css={labelStyles}>City</p>

          <SelectCity />
        </label>

        {errors.city && (
          <div style={{ color: 'red' }}>{errors.city.message}</div>
        )}

        {hasAreas && (
          <>
            <label>
              <p css={labelStyles}>Area</p>

              <SelectArea />
            </label>
          </>
        )}

        <br />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </form>
    </FormProvider>
  );
}
