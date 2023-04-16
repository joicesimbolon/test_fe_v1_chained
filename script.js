var Mobil = {
  Toyota: ["All New Innova Zenyx", "All New Veloz", "New Alphard"],
  Honda: ["New Mobilio", "City Hatchback", "WRV"],
};

window.onload = function () {
  var merkMobil = document.getElementById("merk_mobil");
  var jenisMobil = document.getElementById("jenis_mobil");
  for (var x in Mobil) {
    merkMobil.options[merkMobil.options.length] = new Option(x, x);
  }
  merkMobil.onchange = function () {
    jenisMobil.length = 1;
    var z = Mobil[merkMobil.value];
    for (var i in Mobil[this.value]) {
      jenisMobil.options[jenisMobil.options.length] = new Option(z[i], z[i]);
    }
  };
};
