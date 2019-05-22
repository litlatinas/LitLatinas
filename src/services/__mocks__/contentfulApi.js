export const getPodcasts = () => {
  const podcasts = [
    {
      title: 'this is a title',
      podcast:'www.podcast.com',
    },
    {
      title: 'this is a title',
      podcast:'www.podcast.com',
    },
    {
      title: 'this is a title',
      podcast:'www.podcast.com',
    },
    {
      title: 'this is a title',
      podcast:'www.podcast.com',
    }

  ];
  return Promise.resolve(podcasts);
};

export const getResources = () => {
  const resources = [
    {
      resourceTitle: 'help',
      website:'www.resourcehelp.com',
    },
    {
      resourceTitle: 'help',
      website:'www.resourcehelp.com',
    },
    {
      resourceTitle: 'help',
      website:'www.resourcehelp.com',
    },
    {
      resourceTitle: 'help',
      website:'www.resourcehelp.com',
    }

  ];
  return Promise.resolve(resources);
};
