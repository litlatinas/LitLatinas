const { getPodcasts } = require('./contentfulApi');


jest.mock('./contentfulApi');

describe('contentfulApi wireup', () => {
  it('gets a list podcast', () => {
    return getPodcasts()
      .then(podcasts => {
        expect(podcasts).toHaveLength(4);
        expect.any(Array);
      });
  });
});
