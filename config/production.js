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
					"maxBytes" : 4194304
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
	    	            },
	    	            {
	    	                "name": "github",
	    	                "auth": "github-oauth",
	    	                "label": "GitHub Authentication",
	    	                "icon": {
	    	                    "src": "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
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

					"github-oauth" : {
						"options" : {
							"isSecure" : false,
							"location" : "http://eterationota.com:9001",
							"clientId" : "xxx",
							"clientSecret" : "xxx"
						}
					},
				  "basic": {
    	               "module": "electrode-ota-server-auth-basic",
    	               "scheme": "basic",
    	               "options": {
    	                  "realm": "My Realm",
    	                  "validateFunc": (request, username, password, callback) => {
    	                     err = null;
    	                     isValid = true;
    	                     provider = "basic-auth";
    	                     profile = { email, displayName, username };
    	                     credentials = { provider, profile };
    	                     callback(err, isValid, credentials);
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