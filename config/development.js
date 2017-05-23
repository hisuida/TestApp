module.exports = {

  authApi: {
    // API endpoint for auth API (used for validating token)
    endpoint: 'http://gearbox:2800',
    // URL to Dashboards-based sign-out
    signOutUrl: '//' + window.location.host + '/#/sign-in'
  },

  basic: {
    // The name that shows in the header of the site
    brandName: 'Virtual Hold Technology',
    // URL for the launchpad
    launchpadUrl: '//' + window.location.host
  },

  configApi: {
    // API endpoint for the Configuration Manager API
    endpoint: 'http://localhost:8001'
  },


  managementApi: {
    // API endpoint for the System Management API
    //endpoint: 'http://paladin:8000',
    //endpoint: 'http://ellymay:8000',
    // endpoint: 'http://gearbox:8000',
    //endpoint: 'http://rosco:8000',
    //endpoint: 'http://occtest:8000',
    //endpoint: 'http://lucius:8000',
    // endpoint: 'http://devtest01:8000',
    endpoint: 'http://localhost:8000',
    // How often to call out to the API and get new data
    pollingRate: { seconds: 5 }
  },

  launchpad: {
    // URL to add new segments
    configurationManagementUrl: 'http://localhost:9000/#',
    // URL to dashboards
    dashboardUrl: '#/queues/deck/',
    // URL to EyeQueue (used for redirecting to sign in)
    eyeQueueUrl: '/eyeQueue/home.aspx',
    // URL to Launchpad
    launchpadUrl: '#/launchpad',
    // URL to System Management
    systemManagementUrl: 'http://localhost:9000/#/auth/callback/'
  },

  api:'http://localhost:9000'

};
