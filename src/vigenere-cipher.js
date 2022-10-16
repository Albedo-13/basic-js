const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    let messageEncrypted = "";

    while (key.length < message.length) {
      key += key;
    }
    key = key.toUpperCase();

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        let encLetter = (((message[i].charCodeAt() - 65) + (key[keyIndex].charCodeAt() - 65)) % 26) + 65;
        messageEncrypted += String.fromCharCode(encLetter);

        ++keyIndex;
      } else {
        messageEncrypted += message[i];
      }
    }

    if (!this.isDirect) {
      messageEncrypted = messageEncrypted.split("").reverse().join("");
    }
    return messageEncrypted;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    while (key.length < encryptedMessage.length) {
      key += key;
    }
    key = key.toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();

    let messageDecrypted = "";
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt() >= 65 && encryptedMessage[i].charCodeAt() <= 90) {
        let decLetter = (encryptedMessage[i].charCodeAt() - key[keyIndex].charCodeAt());
        if (decLetter < 0) {
          decLetter += 26;
        }
        decLetter += 65;
        decLetter = String.fromCharCode(decLetter);
        messageDecrypted += decLetter;

        ++keyIndex;
      } else {
        messageDecrypted += encryptedMessage[i];
      }
    }

    if (!this.isDirect) {
      messageDecrypted = messageDecrypted.split("").reverse().join("");
    }
    return messageDecrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
