# ZeroPoint Admin

This repository contains content management system configuration and templates for [ZeroPoint Starter](https://getzeropoint.com). It is designed to provide a customizable admin interface for managing site content.

## Folder Structure

```
content/
  admin/
    admin.11tydata.js        # Eleventy data file for admin page
    admin.njk                # Nunjucks template for admin page
    config.yml.njk           # CMS configuration (Nunjucks)
    editor-components.js.njk # Custom CMS editor components
```

## Usage
This repository is intended as an example, and probably includes more features that your website needs. Use it as a reference to build your own CMS configuration.

To integrate this into your project, copy the `content/admin` folder into your [ZeroPoint Starter](https://getzeropoint.com) project's `content` directory. Then, customize the templates and configuration files as needed.

## License
See `LICENSE` for details.

## Contributing
Pull requests and issues are welcome. Please open an issue to discuss major changes before submitting a PR.
