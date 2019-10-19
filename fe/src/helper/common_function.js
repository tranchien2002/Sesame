function timeConverter(unix_timestamp) {
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var formattedTime =
    hours + ':' + minutes.substr(-2) + ' - ' + day + '/' + month + '/' + year;
  return formattedTime;
}

export const common = { timeConverter };
