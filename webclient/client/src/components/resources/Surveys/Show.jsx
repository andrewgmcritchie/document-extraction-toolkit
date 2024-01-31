import * as React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, Datagrid, NumberField , ArrayField} from 'react-admin'

const PromptsShow = () => (
  <Show actions={null}>
    <SimpleShowLayout>
      <NumberField source="subject" />
      <NumberField source="week" />
      <TextField source="question" />
      <TextField source="answer" />
      <TextField source="autonomy" />
      <TextField source="awareness" />
      <TextField source="relatedness" />
    </SimpleShowLayout>
  </Show>
)

export default PromptsShow
