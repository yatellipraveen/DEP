//https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

// Can you keep a secret

function createSecretHolder(secret) {
  var secretObject = {
    secretValue: secret,
    getSecret: function() {
      return this.secretValue;
    },
    setSecret: function(newSecretValue) {
      this.secretValue = newSecretValue;
    }
  };
  return secretObject;
}
