import { CircularProgress } from "@mui/material";
import styled from '@emotion/styled';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 75px;
`

const Spinner = () => (
  <SpinnerContainer>
    <CircularProgress sx={{color: 'black'}} />
  </SpinnerContainer>
)

export default Spinner