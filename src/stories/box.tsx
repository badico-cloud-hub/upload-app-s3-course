import FileUploadIcon from '@mui/icons-material/FileUpload';

import {
  Content,
  Uploader,
  Filelists,
  ContentFile,
  Container
} from './stylesupload';

export default function Box() {
  return (
    <Container>
      <Content>
        <Uploader></Uploader>
        <Filelists>
          <ContentFile></ContentFile>
        </Filelists>
      </Content>
    </Container>
  );
}
