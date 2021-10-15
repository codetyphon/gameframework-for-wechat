const list = [];
const images = [];
const audios = [];

const add_image = (conf) => {
  const {
    id,
    src
  } = conf;
  list.push({
    id: id,
    src: src,
    type: 'image'
  })
  console.log('add image', conf);
}

const add_audio = (conf) => {
  const {
    id,
    src
  } = conf;
  list.push({
    id: id,
    src: src,
    type: 'audio'
  })
  console.log('add audio', conf);
}

const get_image = (image_id) => {
  return images.filter((image) => image.id == image_id)[0].obj || null;
}
const get_audio = (audio_id) => {
  return audios.filter((audio) => audio.id == audio_id)[0].obj || null;
}

const load_images = (on_res_progress_event, on_res_loaded, start, ctx, sprite, static_image, get_image, get_audio) => {
  console.log('loading images ...');
  const arr = list.filter((item) => {
    return item.type == 'image';
  });
  arr.forEach(item => {
    const {
      id,
      src
    } = item;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      images.push({
        id: id,
        obj: img
      })
      on_res_progress_event(((images.length + audios.length) / list.length).toFixed(2), ctx, sprite, static_image, get_image, get_audio);
      if (images.length + audios.length == list.length) {
        on_res_loaded(start, ctx, get_image, get_audio);
      }
    }
  });
}

const load_audios = (on_res_progress_event, on_res_loaded, start, ctx, sprite, static_image, get_image, get_audio) => {
  console.log('loading audios ...');
  const arr = list.filter((item) => {
    return item.type == 'audio';
  });
  arr.forEach(item => {
    const {
      id,
      src
    } = item;
    const audio = new Audio();
    audio.src = src;
    audio.addEventListener("canplay", () => {
      const count = audios.filter((audio) => {
        return audio.id == id;
      }).length;

      if (count == 0) {
        audios.push({
          id: id,
          obj: audio
        })
        on_res_progress_event(((images.length + audios.length) / list.length).toFixed(2), ctx, sprite, static_image, get_image, get_audio);
        if (images.length + audios.length == list.length) {
          on_res_loaded(start, ctx, get_image, get_audio);
        }
      }
    });
  });
}

const loading_res = (on_res_progress_event, on_res_loaded, start, ctx, sprite, static_image, get_image, get_audio) => {
  load_images(on_res_progress_event, on_res_loaded, start, ctx, sprite, static_image, get_image, get_audio);
  load_audios(on_res_progress_event, on_res_loaded, start, ctx, sprite, static_image, get_image, get_audio);
}

module.exports = {
  add_image,
  add_audio,
  get_image,
  get_audio,
  loading_res
}