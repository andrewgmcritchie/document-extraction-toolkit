import { Datagrid, TextField, ArrayField, SingleFieldList, NumberField, ChipField, SimpleShowLayout, BooleanField } from 'react-admin'
import { useMediaQuery } from '@mui/material'
import { List, ShowButton, EditButton, RelativeTimeField } from 'components/carbon-ra'

import ListFilter from './ListFilter'

const PostShow = () => {
  return (
    <SimpleShowLayout>
      <TextField source="template" />
      <ArrayField source="questions">
        <Datagrid bulkActionButtons={false} >
          <TextField source="field" />
          <TextField source="question" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  )
};

const PromptList = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'))
  return (
  <List hasCreate filters={ListFilter}
  sort={{ field: 'week', order: 'DESC' }}>
    <Datagrid 
      sx={{
        '& td.column-template': {
          maxWidth: isDesktop ? 400 : 200,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      }}
      >
      <ShowButton />
      <NumberField source="subject" />
      <NumberField source="week" />
      <TextField source="question" />
      <TextField source="answer" />
      <EditButton />
      <BooleanField source="autonomy" />
      <BooleanField source="awareness" />
      <BooleanField source="relatedness" />
    </Datagrid>
  </List>
)}

export default PromptList