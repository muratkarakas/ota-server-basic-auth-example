 //Currently not functional

var diregister = require("electrode-ota-server-diregister");



const register = diregister.default({
    name: 'ota!validate',
    dependencies: ['ota!account'],
    multiple: false,
    connections: false
}, (options, {validateFunc}) => {

    const token = (name, callback) => validateFunc(name).then(profile => callback(null, true, {
        email: profile.email,
        name
    }), () => callback(null, false));

    // validates existing session
    const session = (request, session, callback) => token(session.token, callback);


    return {
        // name matches "validate" field in "electrode-ota-server-auth" config
        ldap(r, username, password, callback){
            // TODO:
            //      validate username, password
           // credentials objects matches hapijs/bell credentials format.
           // {
           //          provider: 'custom',
           //          query: {},
           //          profile: {
           //                         id: '1234567890',
           //                         username: 'steve',
           //                         displayName: 'steve',
           //                         email: 'steve@example.com'
            //         }
            //   }
            callback(error, isValid, credentials);
        },
        token,
        session
    };
});
module.exports = {register};