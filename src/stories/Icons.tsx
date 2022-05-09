import FileUploadIcon from '@mui/icons-material/FileUpload';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewComfySharpIcon from '@mui/icons-material/ViewComfySharp';
import RectangleRoundedIcon from '@mui/icons-material/RectangleRounded';

import { Content, Uploader, ContentFile } from './stylesupload';

export default function Icon() {
  return (
    <Content>
      <Uploader>
        <FileUploadIcon />
      </Uploader>

      <ContentFile>
        <ViewComfySharpIcon />
        <GridViewRoundedIcon />
        <RectangleRoundedIcon />
      </ContentFile>
    </Content>
  );
}
