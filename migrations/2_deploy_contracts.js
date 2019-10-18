const Factory = artifacts.require('Factory');

module.exports = function(deployer) {
  deployer.deploy(Factory);

  // deployer.deploy(PetWalletFactory).then((detail) => {
  //   address = '{' + '\n' + '"address":' + '"' + detail.constructor.address + '"' + '\n' + '}';
  //   fs.writeFile(
  //     './client/src/contractsAddress/PetWalletFactory_Address.json',
  //     address,
  //     'utf8',
  //     (err) => {}
  //   );
  // });
};
