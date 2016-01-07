app.config([
  'formioComponentsProvider',
  function(formioComponentsProvider) {
    formioComponentsProvider.register('hidden', {
      fbtemplate: 'formio/formbuilder/hidden.html',
      views: [
        {
          name: 'Display',
          template: 'formio/components/hidden/display.html'
        },
        {
          name: 'API',
          template: 'formio/components/common/api.html'
        }
      ],
      documentation: 'http://help.form.io/userguide/#hidden'
    });
  }
]);
app.run([
  '$templateCache',
  function($templateCache) {

    $templateCache.put('formio/formbuilder/hidden.html', '<span class="hidden-element-text">{{ component.label }}</span>');

    // Create the settings markup.
    $templateCache.put('formio/components/hidden/display.html',
      '<ng-form>' +
        '<form-builder-option property="label" label="Name" placeholder="Enter the name for this hidden field" title="The name for this field. It is only used for administrative purposes such as generating the automatic property name in the API tab (which may be changed manually)."></form-builder-option>' +
        '<form-builder-option property="customClass"></form-builder-option>' +
        '<form-builder-option property="unique"></form-builder-option>' +
        '<form-builder-option property="protected"></form-builder-option>' +
        '<form-builder-option property="persistent"></form-builder-option>' +
        '<form-builder-option property="tableView"></form-builder-option>' +
      '</ng-form>'
    );
  }
]);
