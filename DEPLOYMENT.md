# Public Website Deployment Guide

This website is a static frontend app. It can be deployed publicly without WordPress, PHP, Python, Node.js, or a database.

## Recommended: Netlify Drop

Use this when you want the fastest public URL.

1. Go to https://app.netlify.com/drop
2. Sign in or create a Netlify account.
3. Upload the ZIP file `academic-ai-website-public.zip`, or drag the `academic-ai-website` folder.
4. Netlify will create a public URL such as:

```text
https://your-site-name.netlify.app
```

5. Rename the site from Netlify dashboard if needed.

## Alternative: GitHub Pages

Use this when you want the website connected to a GitHub repository.

1. Create a new public GitHub repository.
2. Upload all files from the `academic-ai-website` folder.
3. Make sure `index.html` is at the root of the published folder.
4. Open repository `Settings`.
5. Open `Pages`.
6. Select the branch/folder as the publishing source.
7. Visit the GitHub Pages URL after the site is published.

GitHub Pages URLs usually look like:

```text
https://your-username.github.io/repository-name/
```

## Alternative: Vercel

Use this when you already prefer Vercel or want Git-based deployments.

1. Create or open a Vercel account.
2. Import a Git repository containing this website.
3. Keep the build command empty for this static site.
4. Use the project root as the output/public directory.
5. Deploy and use the generated Vercel URL.

## Privacy Note

The current website processes student inputs only in the browser with JavaScript. It does not send form data to a server and does not store student records. If you later add login, database storage, or analytics, add a privacy policy and consent notice before collecting student data.

## Files Required Online

Keep these files together:

```text
index.html
styles.css
script.js
assets/framework-dashboard.png
.nojekyll
```
