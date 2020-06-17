const { getPodcasts, getResources } = require('./contentfulApi');

jest.mock('./contentfulApi');

describe('contentfulApi wireup', () => {
  it('gets a list podcast', () => {
    return getPodcasts()
      .then(podcasts => {
        expect(podcasts).toHaveLength(4);
        expect.any(Array);
      });
  }),
  it('gets a list resources', () => {
    return getResources()
      .then(resources => {
        expect(resources).toHaveLength(4);
        expect.any(Array);
      });
  });

});
