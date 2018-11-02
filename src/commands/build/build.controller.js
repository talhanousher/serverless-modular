const buildHelper = require('./build.helper');
const utils = require('../../utils');

class buildClass {
  async createFunctionsYml() {
    const feature = this.options.feature;
    const scope = this.options.scope;
    const srcPath = `${this.cwd}/src`;
    let featureFunctions = [];
    if (scope && (scope !== 'local' && scope !== 'global')) {
      throw new Error('Invalid use of scope flag\n\n only set to "--scope local or --scope global" while using this flag');
    }
    if (feature) {
      featureFunctions = [{
        path: `${srcPath}/${feature}/${feature}-functions.yml`,
        name: feature
      }];
    } else {
      featureFunctions = utils.getFeaturePath(srcPath).map((f) => {
        const fSplit = f.split('/');
        const fName = fSplit[fSplit.length - 1];
        return {
          path: `${f}/${fName}-functions.yml`,
          name: fName
        };
      });
    }

    if (scope === 'local') {
      await buildHelper.localBuild(featureFunctions, feature, this.cwd);
      this.serverless.cli.log(`Local '${featureFunctions.map(f => f.name).join()}' feature build successful`);
    } else {
      await buildHelper.globalBuild(featureFunctions, feature, this.cwd);
      this.serverless.cli.log(`${feature ? `Global '${feature}' Feature` : 'Global'} build successful`);
    }
  }
}

module.exports = buildClass;
