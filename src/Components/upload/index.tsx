import FileUploadIcon from '@mui/icons-material/FileUpload';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewComfySharpIcon from '@mui/icons-material/ViewComfySharp';
import RectangleRoundedIcon from '@mui/icons-material/RectangleRounded';

import { Container, Content, Filelists, Uploader, ContentFile } from './styles';

export default function upload() {
  return (
    <Container>
      <Content>
        <Uploader>
          <FileUploadIcon />
          <p>Arraste e solte arquivos para fazer upload</p>
        </Uploader>
        <Filelists>
          <ContentFile>
            <h1>Arquivos Enviados</h1>
            <ViewComfySharpIcon />
            <GridViewRoundedIcon />
            <RectangleRoundedIcon />
          </ContentFile>
        </Filelists>
      </Content>
    </Container>
  );
}
