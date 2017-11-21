
class Media {
  constructor(knex) {
    this.db = knex;
  }
  getPart = (part_id) => {
    console.info('Media is returning some stuff and parts ', part_id);
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('media_stuff');
  }

  getManual = (manual_id) => {
    console.info('Media is returning some stuff and manuals ', manual_id);
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('media_stuff');
  }

  getBrochure = (brochure_id) => {
    console.info('Media is returning some stuff and brochures ', brochure_id);
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('media_stuff');
  }

  getVideo = (video_id) => {
    console.info('Media is returning some stuff and video ', video_id);
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('media_stuff');
  }
}


export default Media;
