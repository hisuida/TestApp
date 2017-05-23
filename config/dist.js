if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

module.exports = {

  authApi: {
    // API endpoint for auth API (used for validating token)
    endpoint: window.location.protocol + '//' + window.location.hostname + ':2800',
    // URL sign-out for EyeQueue
    signOutUrl: window.location.origin + '/EyeQueue/Logout.aspx'
  },

  basic: {
    // The name that shows in the header of the site
    brandName: 'Virtual Hold Technology',
    // URL for the launchpad
    launchpadUrl: window.location.origin + '/launchpad/#'
  },

  configApi: {
    // API endpoint for the Configuration Manager API
    endpoint: window.location.protocol + '//' + window.location.hostname + ':8001'
  },

  managementApi: {
    // API endpoint for the System Management API
    endpoint: window.location.protocol + '//' + window.location.hostname + ':8000',
    // How often to call out to the API and get new data
    pollingRate: { seconds: 5 }
  },

  launchpad: {
    // URL to Configuration Management
    configurationManagementUrl: window.location.origin + '/ConfigurationManagement/#/',
    // URL to dashboards
    dashboardUrl: window.location.origin + '/Dashboard/#/auth/callback/',
    // URL to EyeQueue
    eyeQueueUrl: window.location.origin + '/EyeQueue/home.aspx',
    // URL to Launchpad
    launchpadUrl: window.location.origin + '/launchpad',
    // URL to System Management
    systemManagementUrl: window.location.origin + '/SystemManagement/#/auth/callback/'
  }

};
