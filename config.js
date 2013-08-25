module.exports = {
  development: {
    db: 'mongodb://localhost:27017/showtime',
//    max_api: {
//      endpoint: 'http://comanager/apps-max-wibu/webroot/modules/x5_api.php',
//      token: 'valm47b5mpep8cbg7isojmoh14'
//    }
    max_api: {
      endpoint: 'https://max-wibu.coprovider.de/cmx-new/app/modules/x5_api.php',
      token: 'j3j7ie39e9bhpnchpvlhp3mb83'
    }
  },
  test: {
    db: 'mongodb://localhost:27017/showtime',
    max_api: {
      endpoint: 'http://comanager/apps-max-wibu/webroot/modules/x5_api.php',
      token: 'valm47b5mpep8cbg7isojmoh14'
    }
  },
  production: {
    // Connect with the `mongo` cli client:
    // $ mongo ds027718.mongolab.com:27718/nodejitsu_matze_nodejitsudb573347369 -u nodejitsu_matze -p ocdo0k9nilsmhv2bcai6top5a0
    db: 'mongodb://nodejitsu_matze:ocdo0k9nilsmhv2bcai6top5a0@ds027718.mongolab.com:27718/nodejitsu_matze_nodejitsudb573347369',
    max_api: {
      endpoint: 'https://max-wibu.coprovider.de/cmx-new/app/modules/x5_api.php',
      token: 'j3j7ie39e9bhpnchpvlhp3mb83'
    }
  }
}