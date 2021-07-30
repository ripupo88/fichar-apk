import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const Download = (token: string, code: string) => {
  const QRurl = 'http://192.168.1.42:3001/empresas/';
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
      const {config, fs} = RNFetchBlob;
      let PictureDir = fs.dirs.DownloadDir; // this is the pictures directory. You can check the available directories in the wiki.
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
          notification: true,
          path: PictureDir + '/QRcode' + code + '.pdf', // this is the path where your downloaded file will live in
          description: 'Downloading PDF.',
        },
      };
      config(options)
        .fetch('GET', QRurl + code, {
          Authorization: `Bearer ${token}`,
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
