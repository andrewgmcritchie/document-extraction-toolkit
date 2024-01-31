import { useState, useEffect } from 'react'
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, TextField, useRecordContext, BooleanInput, SimpleFormIterator, ArrayInput, BooleanField, NumberField } from 'react-admin'
import { useFormContext } from 'react-hook-form'
import { Toolbar } from 'components/carbon-ra'
import InputAdornment from '@mui/material/InputAdornment'
import { AddComment, TextSmallCaps, Json } from '@carbon/icons-react'
const image = (id, filePath) => {
  return (
    <div>
      <img src={`${filePath}`} title={`${id}`} />
    </div>
  )
}

const ImageFileField = (props) => {
  const record = useRecordContext(props)
  const { access_token } = JSON.parse(localStorage.getItem('token'));
  const [contentLink, setContentLink] = useState();
  useEffect(() => {
    if (!contentLink) {
      console.log(`getting signed link for ${record.s3_key}`)
      fetch(`/api/s3/getlink?bucket=${record.s3_bucket}&key=${record.s3_key}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          setContentLink(data.link)
        })
        .catch(error => {
          console.error('Error fetching pre signed s3 link', error);
        });
    }
  }, [record.s3_key]); // The empty dependency array ensures this effect runs only once


  return record ? image(record.id, contentLink) : null
}

const FormInput = ({ className, ...rest }) => {
  const { setValue } = useFormContext() //https://marmelab.com/react-admin/SimpleForm.html#usage
  const record = useRecordContext()
  return (
    <TextInput
      source="list_of_problems"
      multiline
      fullWidth
      onChange={(evt) => {
        // if needs_review is true, we set it to false when the user changed the mdi
        // TODO: needs robust way to do inter annotator agreement
        const needsReview = record.needs_review ? !(record.list_of_problems !== evt.target.value) : false
        setValue('needs_review', needsReview)
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <TextSmallCaps />
          </InputAdornment>
        ),
      }}
      className={className}
      {...rest}
    />
  )
}

const PostEdit = () => (
  <Edit>
    <SimpleForm toolbar={<Toolbar />}>
      <NumberField source="subject" />
      <NumberField source="week" />
      <TextField source="question" />
      <TextField source="answer" />
      <BooleanInput source='autonomy'/>
      <BooleanInput source='awareness'/>
      <BooleanInput source='relatedness'/>
    </SimpleForm>
  </Edit>
)

export default PostEdit
