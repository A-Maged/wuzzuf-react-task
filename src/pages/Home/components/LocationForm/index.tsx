import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import SelectCountry from './SelectCountry';
import { Button } from 'antd';
import SelectCity from './SelectCity';
import SelectArea from './SelectArea';
import { countryHasAreas } from './state';

export default function LocationForm() {
  const formMethods = useForm();
  const errors = formMethods.errors;

  const { country, city } = formMethods.watch(['country', 'city']);
  const hasAreas = countryHasAreas(country, city);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log('rendered');

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <h3>Country</h3>

        <SelectCountry />

        {errors.country && (
          <div style={{ color: 'red' }}>{errors.country.message}</div>
        )}

        <h3>City</h3>

        <SelectCity />

        {errors.city && (
          <div style={{ color: 'red' }}>{errors.city.message}</div>
        )}

        {hasAreas && (
          <>
            <h3>Area</h3>

            <SelectArea />
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
