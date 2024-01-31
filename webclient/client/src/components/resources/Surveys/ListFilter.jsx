/*
 * Copyright 2022 IBM Corp.
 * IBM Confidential Source Code Materials
 * This Source Code is subject to the license and security terms contained in the license/LICENSE file contained in this source code package.
 */
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import { AutocompleteInput, ReferenceInput, TextInput, NullableBooleanInput, DateInput, NumberInput } from 'react-admin'
import { Search } from '@carbon/icons-react'
import { ChipsInput } from '../../carbon-ra'

const ListFilter = [
  <NumberInput source='subject' />,
  <NumberInput source='week' />, 
  <NullableBooleanInput source="autonomy" alwaysOn />,
  <NullableBooleanInput source="awareness" alwaysOn />,
  <NullableBooleanInput source="relatedness" alwaysOn />,
//   <DateInput source="created_at" />,
//   <DateInput source="updated_at" />,
]

export default ListFilter
