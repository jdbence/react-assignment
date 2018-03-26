// Setup any preferred defaults
const TEST_EXT = '.test.js';
const TEST_FOLDER = '__tests__';

/**
 * @description Modify the existing configurations or create your own
 * @example yo react-up <name> <key>
 */
const mappings = (data = {}) => {
  const { args, name } = data;

  // NOTE: Uncomment the line below to see the data available to the templates
  // console.log('- available template data:', data);

  /**
   * @description The idea is that you can setup your own template sets and
   */
  return {

    /**
     * @example yo react-up <ComponentName> class
     */
    class: {
      description: 'React Component',
      detail: 'Create a `React Class` w/ testing folder + stub.',
      files: [
        ['_test/index.js', `/src/components/${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
        ['component/index.js', `/src/components/${ name }/index.js`],
        ['component/class.js', `/src/components/${ name }/${ name }.js`]
      ]
    },
    
    /**
     * @example yo react-up <ModuleName> module
     */
    module: {
      description: 'Redux Module',
      detail: 'Create a `Redux Module`',
      files: [
        ['component/index.js', `/src/modules/${ name }/index.js`],
        ['component/module.js', `/src/modules/${ name }/${ name }.js`]
      ]
    },
    
    /**
     * @example yo react-up <ContainerName> container
     */
    container: {
      description: 'Redux Container',
      detail: 'Create a `Redux Container`',
      files: [
        ['component/container.index.js', `/src/components/${ name }/index.js`],
        ['component/container.js', `/src/components/${ name }/${ name }Container.js`]
      ]
    },

    /**
     * @example yo react-up <ComponentName> pure
     */
    pure: {
      description: 'Functional Component',
      detail: 'Create a `Functional Component` w/ testing folder + stub.',
      files: [
        ['_test/index.js', `/src/components/${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
        //['common/package.json', `/src/components/${ name }/package.json`],
        //['common/styles.scss', `/src/components/${ name }/styles.scss`],
        ['component/pure.js', `/src/components/${ name }/${ name }.js`]
      ]
    },

    /**
     * @example yo react-up <name> test
     */
    test: {
      description: 'Test Stub',
      detail: `Create a test file: ${ args[0] }`,
      files: [
        ['_test/index.js', `${ args[0] }${ TEST_EXT }`]
      ]
    },

    /**
     * @example yo react-up <MyExample> example
     * @description This one is for demonstration purposes.
     *
     * Demonstrates:
     *  - uses TEST_FOLDER and TEST_EXT constants set in `_templates/defaults.js`
     *  - intentional template file is missing to demonstrate feedback
     *  - contains working example of various template tags
     *  - simple files renaming and multi-level folder structures
     */
    example: {
      description: 'example',
      detail: 'Create an example component?',
      files: [
        ['_test/index.js', `/src/components/${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
        ['README.md', `/src/components/${ name }/sub-folder/custom.md`],
        ['README.md', `/src/components/${ name }/README.md`],
        ['something/that/doesnt/exist.md', `/src/components/${ name }/README.md`]
      ]
    }

    /**
     * @example yo react-up <MyExample> create-your-own
     */
  };
};

module.exports = mappings;
