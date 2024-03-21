/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */

const showDownload = (result) => {
    console.log(`File ${result} Berhasil Didownload!`);
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = async (callShowDownload) => {
    try {
      // Simulasi proses download
      await new Promise(resolve => setTimeout(resolve, 2000));
      const downloadedFile = "makalah.pdf";
      callShowDownload(downloadedFile);
    } catch (error) {
      console.error("Gagal mendownload file:", error);
    }
  };

download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
