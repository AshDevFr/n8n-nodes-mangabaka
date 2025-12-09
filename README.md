# n8n-nodes-mangabaka

This is an n8n community node. It lets you use [MangaBaka](https://mangabaka.org/) in your n8n workflows.

MangaBaka is a manga tracking and discovery platform. This node provides integration with the MangaBaka API, allowing you to manage your library, search for series, and retrieve manga information through n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)
[Version History](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

In n8n, go to **Settings** → **Community Nodes** → **Install** and enter:

```
n8n-nodes-mangabaka
```

Or install via npm in your n8n installation directory:

```bash
npm install n8n-nodes-mangabaka
```

## Operations

The MangaBaka node supports the following resources and operations:

### Series

- **Batch Get** - Retrieve multiple series by their IDs
- **Get** - Get the data of a single series
- **Get Full** - Get complete series information including volumes and chapters
- **Get News** - Get news related to a series
- **Get Related** - Get series related to a specific series
- **Search** - Search for series by title

### Library

- **Add Series** - Add a series to your library
- **Get Series Status** - Get the status of a series in your library
- **List** - List all series in your library
- **Remove Series** - Remove a series from your library
- **Update Series** - Update a series status in your library

### Genre

- **List** - List all available genres

## Credentials

To use this node, you need to configure MangaBaka API credentials.

### API Key Authentication

1. Log in to your MangaBaka account
2. Go to your account settings to generate an API key
3. Your API key will start with `mb-`
4. In n8n, create new MangaBaka API credentials
5. Enter your API key in the credentials

**Note:** The API endpoint is `https://api.mangabaka.dev` and is configured automatically.

## Compatibility

- **Minimum n8n version:** 1.0.0
- **MangaBaka API version:** v1

This node has been tested with:

- n8n 1.0.0 and later
- MangaBaka API v1

## Usage

### Example Workflows

**Library Management:**

- Add series to your library automatically based on search criteria
- Track reading progress for series in your library
- Get notifications when series are updated

**Series Discovery:**

- Search for manga by title
- Get related series recommendations
- Browse series by genre
- Get the latest news for your favorite series

**Data Collection:**

- Batch retrieve series information
- Get complete series details including all volumes and chapters
- Export your library data for analysis

### Tips

- Use the **Search** operation to find series, then use the series ID in other operations
- The **Get Full** operation provides comprehensive series data including all volumes and chapters
- Use **Batch Get** when you need to retrieve multiple series efficiently
- The node supports dynamic expressions, so you can use data from previous nodes in your workflow

## Development

For development instructions using Docker, see [README.docker.md](README.docker.md).

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [MangaBaka Website](https://mangabaka.org/)
- [MangaBaka API Documentation](https://mangabaka.org/api)
- [n8n Node Development Guide](https://docs.n8n.io/integrations/creating-nodes/)

## Version History

### 1.0.0

- Initial release
- Support for Series, Library, and Genre resources
- API Key authentication
- Search, batch operations, and full series details
- Library management (add, remove, update, list)
- Genre listing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE.md)

---

**Author:** Sylvain Cau
**Repository:** [https://github.com/AshDevFr/n8n-nodes-mangabaka](https://github.com/AshDevFr/n8n-nodes-mangabaka)
