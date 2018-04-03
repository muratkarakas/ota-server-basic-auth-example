var path = require("path");

const root = path.join.bind(path, __dirname, '..');

module.exports = {
	"app" : {
		"electrode" : true
	},
	"connections" : {
		"default" : {
			"routes" : {
				"payload" : {
					"maxBytes" : 44194304
				}
			}
		}

	},
	"plugins" : {

		"electrode-ota-server-dao-cassandra" : {
			"options" : {
				"contactPoints" : [ "localhost" ]
			}
		},
		"electrode-ota-server-dao-plugin" : {
			"options" : {
				"contactPoints" : [ "localhost" ]
			}
		},
		"electrode-ota-server-fileservice-upload" : {
			"options" : {
				"downloadUrl" : "http://192.168.1.107:9001/storagev2"
			}
		},
	    "electrode-ota-server-routes-auth": {
	    	    "options": {
	    	        "providers": [
	    	            {
	    	                "name": "basic",
	    	                "auth": "basic",
	    	                "label": "Basic Authentication",
	    	                "icon": {
	    	                    "src": "https://www.graphicsprings.com/filestorage/images/283/logomakersamples45.png?width=150&height=70&quality=80&crop=0&method=crop",
	    	                    "height": 50,
	    	                    "width": 50
	    	                }
	    	            }
	    	        ]
	    	    }
	    	  },
		"electrode-ota-server-auth" : {
			"options" : {
				"strategy" : {

					"github-oauth": {
                        "enable": false
                    },
				  "basic": {
    	               "module": "electrode-ota-server-auth-basic",
    	               "scheme": "basic",
    	               "options": {
    	                  "realm": "My Realm",
    	                  "validateFunc": (request, username, password, callback) => {
    	                	  
    	                	 try {
    	                		 console.log("custom validate function"); 
        	                     err = null;
        	                     isValid = true;
        	                     provider = "basic-auth";
        	                     profile = { "email":"murat@eteration.com", "displayName":"Murat Karakas", "username":"mkarakas" };
        	                     credentials = { provider, profile };
        	                     console.log("custom validate function before login"); 
        	                     callback(err, isValid, credentials);
							} catch (e) {
								console.dir(e);
								callback(e, false, null);
							} 
    	                	 
    	                  }
    	               }
    	              },
    	              "session" : {
						"options" : {
							"isSecure" : false
						}
					}

				}
			}
		}

	}
}