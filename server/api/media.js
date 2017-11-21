import express from 'express';

const mediaRouter = express.Router();
import { Media } from '../models';

mediaRouter.get('/parts/:part_id', (req, res) => {
  const part_id = req.params.part_id;
  Media.getPart(part_id).then((media) => {
    res.json(media);
  });
});

mediaRouter.get('/manuals/:manual_id', (req, res) => {
  const manual_id = req.params.manual_id;
  Media.getManual(manual_id).then((media) => {
    res.json(media);
  });
});

mediaRouter.get('/brochures/:brochure_id', (req, res) => {
  const brochure_id = req.params.brochure_id;
  Media.getBrochure(brochure_id).then((media) => {
    res.json(media);
  });
});

mediaRouter.get('/videos/:video_id', (req, res) => {
  const video_id = req.params.video_id;
  Media.getVideo(video_id).then((media) => {
    res.json(media);
  });
});


export default mediaRouter;
