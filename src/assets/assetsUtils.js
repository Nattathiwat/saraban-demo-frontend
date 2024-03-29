
const months = [ 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',]; 
const months_Long = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ];
const types = {
 pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation', xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',csv: 'text/csv;charset=utf-8', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', abs: 'audio/x-mpeg', ai: 'application/postscript', aif: 'audio/x-aiff', aifc: 'audio/x-aiff', aiff: 'audio/x-aiff', aim: 'application/x-aim', art: 'image/x-jg', asf: 'video/x-ms-asf', asx: 'video/x-ms-asf', au: 'audio/basic', avi: 'video/x-msvideo', avx: 'video/x-rad-screenplay', bcpio: 'application/x-bcpio', bin: 'application/octet-stream', bmp: 'image/bmp', body: 'text/html', cdf: 'application/x-cdf', cer: 'application/pkix-cert', class: 'application/java', cpio: 'application/x-cpio', csh: 'application/x-csh', css: 'text/css', dib: 'image/bmp', doc: 'application/msword', dtd: 'application/xml-dtd', dv: 'video/x-dv', dvi: 'application/x-dvi', eot: 'application/vnd.ms-fontobject', eps: 'application/postscript', etx: 'text/x-setext', exe: 'application/octet-stream', gif: 'image/gif', gtar: 'application/x-gtar', gz: 'application/x-gzip', hdf: 'application/x-hdf', hqx: 'application/mac-binhex40', htc: 'text/x-component', htm: 'text/html', html: 'text/html', ief: 'image/ief', jad: 'text/vnd.sun.j2me.app-descriptor', jar: 'application/java-archive', java: 'text/x-java-source', jnlp: 'application/x-java-jnlp-file', jpe: 'image/jpeg', jpeg: 'image/jpeg', jpg: 'image/jpeg', js: 'application/javascript', jsf: 'text/plain', json: 'application/json', jspf: 'text/plain', kar: 'audio/midi', latex: 'application/x-latex', m3u: 'audio/x-mpegurl', mac: 'image/x-macpaint', man: 'text/troff', mathml: 'application/mathml+xml', me: 'text/troff', mid: 'audio/midi', midi: 'audio/midi', mif: 'application/x-mif', mov: 'video/quicktime', movie: 'video/x-sgi-movie', mp1: 'audio/mpeg', mp2: 'audio/mpeg', mp3: 'audio/mpeg', mp4: 'video/mp4', mpa: 'audio/mpeg', mpe: 'video/mpeg', mpeg: 'video/mpeg', mpega: 'audio/x-mpeg', mpg: 'video/mpeg', mpv2: 'video/mpeg2', ms: 'application/x-wais-source', nc: 'application/x-netcdf', oda: 'application/oda', odb: 'application/vnd.oasis.opendocument.database', odc: 'application/vnd.oasis.opendocument.chart', odf: 'application/vnd.oasis.opendocument.formula', odg: 'application/vnd.oasis.opendocument.graphics', odi: 'application/vnd.oasis.opendocument.image', odm: 'application/vnd.oasis.opendocument.text-master', odp: 'application/vnd.oasis.opendocument.presentation', ods: 'application/vnd.oasis.opendocument.spreadsheet', odt: 'application/vnd.oasis.opendocument.text', otg: 'application/vnd.oasis.opendocument.graphics-template', oth: 'application/vnd.oasis.opendocument.text-web', otp: 'application/vnd.oasis.opendocument.presentation-template', ots: 'application/vnd.oasis.opendocument.spreadsheet-template', ott: 'application/vnd.oasis.opendocument.text-template', ogx: 'application/ogg', ogv: 'video/ogg', oga: 'audio/ogg', ogg: 'audio/ogg', otf: 'application/x-font-opentype', spx: 'audio/ogg', flac: 'audio/flac', anx: 'application/annodex', axa: 'audio/annodex', axv: 'video/annodex', xspf: 'application/xspf+xml', pbm: 'image/x-portable-bitmap', pct: 'image/pict', pdf: 'application/pdf', pgm: 'image/x-portable-graymap', pic: 'image/pict', pict: 'image/pict', pls: 'audio/x-scpls', png: 'image/png', pnm: 'image/x-portable-anymap', pnt: 'image/x-macpaint', ppm: 'image/x-portable-pixmap', ppt: 'application/vnd.ms-powerpoint', pps: 'application/vnd.ms-powerpoint', ps: 'application/postscript', psd: 'image/vnd.adobe.photoshop', qt: 'video/quicktime', qti: 'image/x-quicktime', qtif: 'image/x-quicktime', ras: 'image/x-cmu-raster', rdf: 'application/rdf+xml', rgb: 'image/x-rgb', rm: 'application/vnd.rn-realmedia', roff: 'text/troff', rtf: 'application/rtf', rtx: 'text/richtext', sfnt: 'application/font-sfnt', sh: 'application/x-sh', shar: 'application/x-shar', sit: 'application/x-stuffit', snd: 'audio/basic', src: 'application/x-wais-source', sv4cpio: 'application/x-sv4cpio', sv4crc: 'application/x-sv4crc', svg: 'image/svg+xml', svgz: 'image/svg+xml', swf: 'application/x-shockwave-flash', t: 'text/troff', tar: 'application/x-tar', tcl: 'application/x-tcl', tex: 'application/x-tex', texi: 'application/x-texinfo', texinfo: 'application/x-texinfo', tif: 'image/tiff', tiff: 'image/tiff', tr: 'text/troff', tsv: 'text/tab-separated-values', ttf: 'application/x-font-ttf', txt: 'text/plain', ulw: 'audio/basic', ustar: 'application/x-ustar', vxml: 'application/voicexml+xml', xbm: 'image/x-xbitmap', xht: 'application/xhtml+xml', xhtml: 'application/xhtml+xml', xls: 'application/vnd.ms-excel', xml: 'application/xml', xpm: 'image/x-xpixmap', xsl: 'application/xml', xslt: 'application/xslt+xml', xul: 'application/vnd.mozilla.xul+xml', xwd: 'image/x-xwindowdump', vsd: 'application/vnd.visio', wav: 'audio/x-wav', wbmp: 'image/vnd.wap.wbmp', wml: 'text/vnd.wap.wml', wmlc: 'application/vnd.wap.wmlc', wmls: 'text/vnd.wap.wmlsc', wmlscriptc: 'application/vnd.wap.wmlscriptc', wmv: 'video/x-ms-wmv', woff: 'application/font-woff', woff2: 'application/font-woff2', wrl: 'model/vrml', wspolicy: 'application/wspolicy+xml', z: 'application/x-compress', zip: 'application/zip'
};
export default {
  getTypeFile(filename) {
    let type = filename.split('.').pop();
    return types[type] ? types[type] : 'application/octet-stream'
  },
  currentDate() {
    let d = new Date();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let output = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + (d.getFullYear() + 543);
    return output
  },
  currentTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let output = (h<10 ? '0' : '') + h + ':' + (m<10 ? '0' : '') + m;
    return output
  },
  convertLongMonth(data) {
    if (data.split('/').length > 2) {
      return data.split('/')[0] + ' ' + months_Long[parseInt(data.split('/')[1])-1] + ' ' + data.split('/')[2]
    } else {
      return ''
    }
  },
  commaNumber(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  yearDel543(data) {
    return data ? data.split('/')[0]+'/'+data.split('/')[1]+'/'+(data.split('/')[2]-543) : ''
  },
  yearPlus543(data) {
    return data ? data.split('/')[0]+'/'+data.split('/')[1]+'/'+(+(data.split('/')[2])+543) : ''
  },
  covertDateByMonthThBbRev(monthThBbRev) {
    let result = '';
    if (monthThBbRev) {
      if (monthThBbRev.split(' ').length > 3) {
        let dateArr = monthThBbRev.split(' ');
        let month = months.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]} ${dateArr[3]} ${dateArr[4]}`;
      } else {
        let dateArr = monthThBbRev.split(' ');
        let month = months.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]}`;
      }
    } else {
      result = '';
    }
    return result;
  },
  covertDateByMonthTh(monthThBbRev) {
    let result = '';
    if (monthThBbRev) {
      if (monthThBbRev.split(' ').length > 3) {
        let dateArr = monthThBbRev.split(' ');
        let month = months_Long.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]} ${dateArr[3]} ${dateArr[4]}`;
      } else {
        let dateArr = monthThBbRev.split(' ');
        let month = months_Long.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]}`;
      }
    } else {
      result = '';
    }
    return result;
  },
  longDateToShort(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    return `${day > 9 ? day : '0' + day}/${month > 9 ? month : '0' + month}/${year}`;
  },
  formatNewDate(data) {
    if(data) {
      if (data.split(' ').length > 1) {
        let newDate = data.split(' ')[0]
        let newTime = data.split(' ')[1]
        return new Date(+newDate.split("/")[2] - 543, newDate.split("/")[1] - 1, newDate.split("/")[0], newTime.split(":")[0], newTime.split(":")[1])
      } else {
        return new Date(+data.split("/")[2] - 543, data.split("/")[1] - 1, data.split("/")[0])
      }
    } else {
      return ''
    }
  },
  numberFormatComma(data) {
    // data.replace(/,/g, ""))
    return data.toString().replace(/,/g, "").replace(/^[+-]?\d+/, (int) => int.replace(/(\d)(?=(\d{3})+$)/g, '$1,'));
  },
  phoneFormatDash(data) {
    // data.replace(/-/g, ""))
    return data.toString().match(/\d*/g).join('').match(/(\d{0,3})(\d{0,3})(\d{0,4})/).slice(1).join('-').replace(/-*$/g, '');
  }
}