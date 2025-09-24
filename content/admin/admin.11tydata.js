/**
 * Eleventy directory data file for src/content/admin
 * Sets permalink: false for all files in this directory if ELEVENTY_ENV is 'production'.
 * Otherwise, leaves permalink untouched (default behavior).
 *
 * @see https://www.11ty.dev/docs/data-computed/
 * @see https://www.11ty.dev/docs/permalinks/
 */
export default {
  eleventyComputed: {
    permalink: (data) => {
      if (process.env.ELEVENTY_ENV === 'production') {
        return false;
      }
      // Let individual file/frontmatter control permalink in non-production
      return data.permalink;
    },
  },
};
