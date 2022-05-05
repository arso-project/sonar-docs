module.exports = {
  sidebar: [
    'intro-start',
    { type: 'category', label: 'Guides', items: [
      'guides/runServer',
      'guides/workspace',
      'guides/collections',
      'guides/files',
      'guides/search'
    ]},
    { type: 'category', label: 'Architecture', items: [
      'architecture/hyperstack',
      'architecture/kappa',
      'architecture/tantivy',
      'architecture/architecture-sonar'
    ]},
    { type: 'category', label: 'API', items: [
      'api/api-client', 'api/api-schema', 'api/api-glossary'
    ]}
  ]
}
