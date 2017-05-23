$.mockjax({
  url: /.*\/status\/summary$/,
  response: function() {
    this.responseText = JSON.stringify([{
      "solutionSet": "VHT",
      "status": "started"
    }]);
  }
});
