# The Joy of Testing  

A website for testing and experimenting with published data.  

<p align="right">
  <a href="https://app.netlify.com/sites/joy-of-testing/deploys"><img src="https://api.netlify.com/api/v1/badges/441735f0-9603-4eba-96c8-a95cee1eafe1/deploy-status" alt="Netlify Status"/></a>
</p>

## Features  

- Multi-page layout
- [React Spring](https://github.com/drcmda/react-spring) (Used for Parallax effect)
- [TailwindCSS](https://tailwindcss.com/) & [styled-components](https://www.styled-components.com/) for styling
  - Uses the full power of TailwindCSS and PurgeCSS to generate minimal stylesheets
  - Uses `tailwind.macro` (Babel macro) to have hot-reloading of Tailwind styles
- SEO
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- [Typefaces](https://github.com/KyleAMathews/typefaces) for quicker font loading
- Offline Support
- WebApp Manifest Support
- Responsive images
  - The right image size for every screen size
  - WebP Support for compatible browsers
  - Lazy-Loading


<br>

**Built with:**  

<p>
  <a href="https://www.gatsbyjs.org/"><img src="https://user-images.githubusercontent.com/16360374/54067385-3051be80-41f4-11e9-9daf-29f910f35427.png" alt="GatsbyJS" height="40"></a>
  <a href="https://reactjs.org/"><img src="https://user-images.githubusercontent.com/16360374/54067296-34c9a780-41f3-11e9-985c-dae0828c2470.png" alt="React" height="40"></a>
  <a href="https://graphql.org/"><img src="https://user-images.githubusercontent.com/16360374/54067380-292ab080-41f4-11e9-9819-6d96fb2124e2.png" alt="GraphQL" height="40"></a>
  <a href="https://app.netlify.com/"><img src="https://user-images.githubusercontent.com/16360374/75855942-2a130580-5da8-11ea-9d8c-a34ac6e59fe1.png" alt="Netlify" height="40"></a>
  <a href="https://www.styled-components.com/"><img src="https://user-images.githubusercontent.com/16360374/54067384-2def6480-41f4-11e9-9e55-a32e72ed23de.png" alt="Styled Components" height="40"></a>
  <a href="https://tailwindcss.com"><img src="https://user-images.githubusercontent.com/16360374/54067382-2b8d0a80-41f4-11e9-8613-98edcad9e89f.png" alt="Tailwind" height="40"></a>
  <a href="https://www.react-spring.io/"><img src="https://user-images.githubusercontent.com/16360374/54067378-26c85680-41f4-11e9-8cca-552b091b267b.png" alt="React Spring" height="40"></a>
  <a href="https://disqus.com/"><img src="https://user-images.githubusercontent.com/16360374/55284185-43087080-5326-11e9-9931-cf0baddc2684.png" alt="Disqus" height="40"></a>
</p>


## Install  
You can install dependencies and build the local plugins using the command:  

```sh
$ yarn bootstrap
```

## Usage  

To run the app locally you can use the command:

```sh
$ yarn develop
```

### Running with local Disqus  

This app features a modified version of the [gatsby-disqus-plugin](https://github.com/tterb/gatsby-plugin-disqus) that allows it to be configured to run with locally hosted Disqus services by utilizing custom node environments.  

To run the app locally with a local Disqus frontend:
```sh
$ yarn local
```

To run the app locally with a local Disqus backend:
```sh
$ yarn backend
```

### Modifying the local Disqus plugin  

If you want to modify the functionality of the local Disqus plugin, you can find the code in the `plugins/gatsby-plugin-disqus/src/` directory and then use following command to rebuild the plugin with your changes:  
```sh
$ yarn build-plugin
```

### Adding a post  

The example posts are written in [MDX](https://mdxjs.com/) and sourced from the `src/contents/posts/` directory, where you will find a subdirectory for each existing post. There you create a new post that matches the structure of the existing examples.  
If you're looking for some inspiration, the current post contents are courtesy of [bobrosslipsum.com](https://www.bobrosslipsum.com/).  
