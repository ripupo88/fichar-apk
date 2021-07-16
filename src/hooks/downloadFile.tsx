import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const Download = (url: string, token: string) => {
  const checkpermision = async () => {
    const permiso = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Se requiere permiso',
        message:
          'Se requiere permiso para guardar el PDF con el código QR en su dispositivo',
        buttonPositive: 'Aceptar',
      },
    );
    if (permiso === PermissionsAndroid.RESULTS.GRANTED) {
      const date = new Date();
      console.log(token);
      const {config, fs} = RNFetchBlob;
      let PictureDir = fs.dirs.DownloadDir; // this is the pictures directory. You can check the available directories in the wiki.
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
          notification: true,
          path:
            PictureDir +
            '/me_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            '.pdf', // this is the path where your downloaded file will live in
          description: 'Downloading PDF.',
        },
      };
      config(options)
        .fetch('GET', url, {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJpY2hhciIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNjQwNjY4MSwiZXhwIjoxNjI4OTk4NjgxfQ.xM7BWxNMxnvCQd1ady_dNSAvVlmDOXF_fBEEo9HcZQc',

          // more headers  ..
        })
        .then((res) => {
          // do some magic here
          console.log(res);
        });
    }
  };
  checkpermision();
};
