import { Grid, Column, Tile } from '@carbon/react'
import { Typography, useMediaQuery } from '@mui/material'
import { DocumentConversion } from '@carbon/pictograms-react'
import { useTranslate } from 'react-admin'
import { CodeSnippet } from '@carbon/react'

const MainPage = () => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const translate = useTranslate()
  return (
    <Grid>
      <Column lg={16}>
        <Tile>
          <Grid>
            <Column lg={4}>
              {/* <DocumentConversion style={{ width: 128, height: 128 }} /> */}
              <img src="https://static.wixstatic.com/media/0b1878_cf6a4bcd32b746249eedbb45ec321718~mv2.png/v1/fill/w_122,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2023%20Neurocycle-Logo.png" />
            </Column>
            <Column lg={12}>
              <Typography variant="h1">{translate('menu.header')}</Typography>
            </Column>
          </Grid>
        </Tile>
      </Column>
      <Column lg={16}>
        <Tile>
          <CodeSnippet type="multi" feedback="Copied to clipboard" wrapText={true} maxCollapsedNumberOfRows={20}>
            {`Predict codes for patient responses using watsonx`}
          </CodeSnippet>
        </Tile>
      </Column>
      <Column lg={16}>
        <Tile>
          <CodeSnippet type="multi" feedback="Copied to clipboard" wrapText={true} maxCollapsedNumberOfRows={20}>
            {`Disclaimer: The predicted insights are generated using artificial intelligence (AI) for each input. The content produced by AI is not influenced by personal opinions, emotions, or intentions. Reviewer discretion is advised.`}
          </CodeSnippet>
        </Tile>
      </Column>
      <Column lg={16}>
        <Tile>{translate('copyright')}</Tile>
      </Column>
    </Grid>
  )
}

export default MainPage
